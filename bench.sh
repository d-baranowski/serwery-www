#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

USERS="${1:-}"
# Per-level tuning: ramp-up scaled to #users so JMeter doesn't choke spawning threads;
# duration = sustained-load window after ramp (enough to see stable stats in htop/docker stats).
case "$USERS" in
  50)   RAMPUP=5;  DURATION=60 ;;
  500)  RAMPUP=15; DURATION=60 ;;
  5000) RAMPUP=60; DURATION=60 ;;
  *) echo "Usage: $(basename "$0") <50|500|5000>" >&2; exit 1 ;;
esac

if ! docker ps --filter 'name=^servery-nginx$' --filter 'status=running' --format '{{.Names}}' | grep -q servery-nginx; then
  echo "nginx container is not running — run ./start.sh first" >&2
  exit 1
fi

mkdir -p jmeter/results
TS="$(date +%Y%m%d-%H%M%S)"
BASE="run-${USERS}u-${TS}"

echo "=== ${USERS} users | ramp-up=${RAMPUP}s | steady-load=${DURATION}s | total elapsed ~$(( RAMPUP + DURATION ))s ==="

docker run --rm -i \
  --add-host=host.docker.internal:host-gateway \
  -v "$PROJECT_DIR/jmeter:/tests" \
  justb4/jmeter:latest \
  -n -t /tests/plan.jmx \
  -l "/tests/results/${BASE}.jtl" \
  -e -o "/tests/results/${BASE}-report" \
  -Jthreads="$USERS" \
  -Jrampup="$RAMPUP" \
  -Jduration="$DURATION"

echo
echo "jtl:    jmeter/results/${BASE}.jtl"
echo "report: file://$PROJECT_DIR/jmeter/results/${BASE}-report/index.html"
