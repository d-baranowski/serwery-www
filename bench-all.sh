#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

if ! docker ps --filter 'name=^servery-nginx$' --filter 'status=running' --format '{{.Names}}' | grep -q servery-nginx; then
  echo "nginx container is not running — run ./start.sh first" >&2
  exit 1
fi

has_gnuplot() { command -v gnuplot >/dev/null; }

# Parses "10.47MiB" / "1.4GiB" / "512KiB" / "512B" → MiB (float).
normalize_mem_mib() {
  awk '
    {
      val=$0; n=length(val); i=n
      while (i>0 && (substr(val,i,1)<"0" || substr(val,i,1)>"9") && substr(val,i,1)!=".") { i-- }
      unit=substr(val,i+1); num=substr(val,1,i)+0
      if      (unit=="GiB") mib=num*1024
      else if (unit=="KiB") mib=num/1024
      else if (unit=="B")   mib=num/1048576
      else                  mib=num
      printf "%.2f", mib
    }'
}

# Poll docker stats every 1s. Writes CSV rows: time_s,cpu_pct,mem_mib
#   $1 = output CSV path. Caller kills us.
monitor_container() {
  local out="$1"
  : > "$out"
  local t0
  t0=$(date +%s)
  while true; do
    local line cpu mem_raw mem_mib now
    line=$(docker stats --no-stream --format '{{.CPUPerc}}|{{.MemUsage}}' servery-nginx 2>/dev/null || true)
    if [ -n "$line" ]; then
      cpu=${line%%|*}; cpu=${cpu%\%}
      mem_raw=${line##*|}; mem_raw=${mem_raw%% *}    # "10.47MiB / 7.653GiB" → "10.47MiB"
      mem_mib=$(printf '%s' "$mem_raw" | normalize_mem_mib)
      now=$(( $(date +%s) - t0 ))
      echo "$now,$cpu,$mem_mib" >> "$out"
    fi
    sleep 1
  done
}

peak_cpu() { awk -F, '$2+0>m{m=$2+0} END{printf "%.1f", m+0}' "$1"; }
peak_mem() { awk -F, '$3+0>m{m=$3+0} END{printf "%.1fMiB", m+0}' "$1"; }

# Render dual-axis PNG: CPU% (left Y) + MEM MiB (right Y) vs time (X).
#   $1 = CSV, $2 = PNG output, $3 = title
render_chart() {
  local csv="$1" png="$2" title="$3"
  if ! has_gnuplot; then return 1; fi
  gnuplot <<GPL
set terminal pngcairo size 900,500 font 'Helvetica,11'
set output "$png"
set title "$title" font 'Helvetica,13'
set xlabel "seconds"
set ylabel "CPU %"  tc rgb "#1f77b4"
set y2label "MEM MiB" tc rgb "#d62728"
set ytics nomirror  tc rgb "#1f77b4"
set y2tics          tc rgb "#d62728"
set key top left box
set datafile separator ","
set grid
plot "$csv" using 1:2 with lines lw 2 lc rgb "#1f77b4" title "CPU %"    axes x1y1, \\
     "$csv" using 1:3 with lines lw 2 lc rgb "#d62728" title "MEM MiB"  axes x1y2
GPL
}

summarize_row() {
  local users="$1" stats="$2" cpu_peak="$3" mem_peak="$4" chart="$5"
  if [ ! -f "$stats" ]; then
    printf '%s | (no statistics.json)\n' "$users"
    return
  fi
  jq -r --arg users "$users" --arg cpu "$cpu_peak" --arg mem "$mem_peak" --arg chart "$chart" '
    .Total |
    "\($users) | " +
    "samples=\(.sampleCount)  " +
    "errors=\(.errorCount) (\(.errorPct)%)  " +
    "avg=\(.meanResTime | floor)ms  " +
    "min=\(.minResTime | floor)ms  max=\(.maxResTime | floor)ms  " +
    "p90=\(.pct1ResTime | floor)ms  p95=\(.pct2ResTime | floor)ms  p99=\(.pct3ResTime | floor)ms  " +
    "throughput=\(.throughput | floor)/s  " +
    "cpu_peak=\($cpu)%  mem_peak=\($mem)" +
    (if $chart != "" then "  chart=\($chart)" else "" end)
  ' "$stats"
}

mkdir -p jmeter/results

echo "=== servery-www load test suite ==="
date "+%Y-%m-%d %H:%M:%S %Z"
echo "target:  host.docker.internal:4543"
echo "charts:  $(has_gnuplot && echo 'gnuplot OK' || echo 'gnuplot MISSING — install with: brew install gnuplot')"
echo

results=()
for USERS in 50 500 5000; do
  echo "───────── ${USERS} users ─────────"

  TS="$(date +%Y%m%d-%H%M%S)"
  BASE="run-${USERS}u-${TS}"
  MONITOR_CSV="jmeter/results/${BASE}-monitor.csv"
  MONITOR_PNG="jmeter/results/${BASE}-monitor.png"

  monitor_container "$MONITOR_CSV" &
  mon_pid=$!

  ./bench.sh "$USERS"
  kill "$mon_pid" 2>/dev/null || true
  wait "$mon_pid" 2>/dev/null || true

  # bench.sh emits its own run-<users>u-<its_own_timestamp>-report/ — find the newest one.
  latest_report=$(ls -td jmeter/results/run-${USERS}u-*-report 2>/dev/null | head -1 || true)
  stats="${latest_report}/statistics.json"

  cpu_peak=$(peak_cpu "$MONITOR_CSV" 2>/dev/null || echo "?")
  mem_peak=$(peak_mem "$MONITOR_CSV" 2>/dev/null || echo "?")

  chart_path=""
  if has_gnuplot && [ -s "$MONITOR_CSV" ]; then
    if render_chart "$MONITOR_CSV" "$MONITOR_PNG" "${USERS} users — container CPU/MEM" 2>/dev/null; then
      chart_path="$MONITOR_PNG"
    fi
  fi

  results+=("$(summarize_row "$USERS" "$stats" "$cpu_peak" "$mem_peak" "$chart_path")")

  echo
  sleep 5
done

echo "=== SUMMARY ==="
printf '%s\n' "${results[@]}"
echo
echo "Wyniki w jmeter/results/:"
echo "  run-*u-*.jtl              — raw results (CSV)"
echo "  run-*u-*-report/          — JMeter HTML report (timing graphs)"
echo "  run-*u-*-monitor.csv      — CPU/MEM samples (time_s,cpu_pct,mem_mib)"
if has_gnuplot; then
  echo "  run-*u-*-monitor.png      — CPU/MEM chart (paste to Slack)"
fi
