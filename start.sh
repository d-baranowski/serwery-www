#!/usr/bin/env bash
set -euo pipefail

SESSION="__servery-www"
PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

command -v tmux    >/dev/null || { echo "tmux not installed"   >&2; exit 1; }
command -v docker  >/dev/null || { echo "docker not installed" >&2; exit 1; }
command -v htop    >/dev/null || { echo "htop not installed — brew install htop" >&2; exit 1; }
command -v python3 >/dev/null || { echo "python3 not installed" >&2; exit 1; }

docker compose up -d >/dev/null

mkdir -p logs jmeter/results
touch logs/access.log logs/error.log

attach_or_switch() {
  if [ -n "${TMUX:-}" ]; then
    tmux switch-client -t "$SESSION"
  else
    exec tmux attach -t "$SESSION"
  fi
}

if tmux has-session -t "$SESSION" 2>/dev/null; then
  attach_or_switch
  exit 0
fi

LOGS_SHELL_CMD=$(cat <<'PANE'
clear
cat <<'CHEAT'
── servery-www cheat sheet ─────────────────────────────
  curl -H 'Host: project1.local' http://localhost:4543/
  curl -H 'Host: project2.local' http://localhost:4543/
  curl http://localhost:4543/nie-istnieje.html      # 404

  grep -E ' [45][0-9]{2} ' logs/access.log
  awk '{print $9}' logs/access.log | sort | uniq -c
  awk '{print $7}' logs/access.log | sort | uniq -c | sort -rn
  awk '{print $1}' logs/access.log | sort | uniq -c | sort -rn

  ./stop.sh   # stop tmux + docker
────────────────────────────────────────────────────────
CHEAT
exec $SHELL
PANE
)

BENCH_SHELL_CMD=$(cat <<'PANE'
clear
cat <<'CHEAT'
── bench cheat sheet ───────────────────────────────────
  ./bench.sh 50         # pojedynczy test: 50 userów
  ./bench.sh 500        # pojedynczy test: 500 userów
  ./bench.sh 5000       # pojedynczy test: 5000 userów

  ./bench-all.sh        # wszystkie 3 testy + tabelka + wykresy PNG

  jmeter/results/       # JTL + HTML report + monitor.csv + monitor.png

  Panel prawy-górny: live sparkline CPU/MEM kontenera (co ~2-3s)
────────────────────────────────────────────────────────
CHEAT
exec $SHELL
PANE
)

# ── window 1: "logs" ─────────────────────────────────
#   ┌─────────────────┬──────────────┐
#   │ docker logs -f  │ access.log   │
#   ├─────────────────┼──────────────┤
#   │ shell + cheat   │ error.log    │
#   └─────────────────┴──────────────┘

tmux new-session   -d -s "$SESSION" -n logs -c "$PROJECT_DIR" "docker compose logs -f nginx"
tmux split-window  -h -t "$SESSION:logs" -c "$PROJECT_DIR" "tail -F $PROJECT_DIR/logs/access.log"
tmux split-window  -v -t "$SESSION:logs" -c "$PROJECT_DIR" "tail -F $PROJECT_DIR/logs/error.log"
tmux select-pane      -t "$SESSION:logs" -L
tmux split-window  -v -t "$SESSION:logs" -c "$PROJECT_DIR" "$LOGS_SHELL_CMD"
tmux select-layout    -t "$SESSION:logs" tiled

# ── window 2: "bench" ────────────────────────────────
#   ┌──────────────────┬──────────────────┐
#   │ htop             │ docker stats     │
#   ├──────────────────┴──────────────────┤
#   │ shell + bench cheatsheet            │
#   └─────────────────────────────────────┘

tmux new-window    -t "$SESSION" -n bench -c "$PROJECT_DIR" "htop"
tmux split-window  -v -t "$SESSION:bench" -c "$PROJECT_DIR" "$BENCH_SHELL_CMD"
tmux select-pane      -t "$SESSION:bench" -U
tmux split-window  -h -t "$SESSION:bench" -c "$PROJECT_DIR" "$PROJECT_DIR/scripts/live-graph.py servery-nginx"
tmux select-pane      -t "$SESSION:bench" -D   # focus the bench shell

# Start on the logs window by default
tmux select-window -t "$SESSION:logs"

attach_or_switch
