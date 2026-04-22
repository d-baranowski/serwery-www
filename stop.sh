#!/usr/bin/env bash
set -euo pipefail

SESSION="__servery-www"
CONTAINER="servery-nginx"
PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

# 1. Kill tmux session (sends SIGHUP → pane processes: docker logs, tail, shell)
if command -v tmux >/dev/null && tmux has-session -t "$SESSION" 2>/dev/null; then
  tmux kill-session -t "$SESSION"
  echo "tmux session '$SESSION' killed"
else
  echo "tmux session '$SESSION' not running"
fi

# 2. Kill our tail -F processes if they survived SIGHUP (macOS sometimes leaks
#    them). Match on the EXACT argv including absolute project path — that's
#    unique enough that we won't hit unrelated processes.
#    WARNING: do NOT use `lsof` here — Docker Desktop's VM holds bind-mounted
#    log files open on macOS, and killing that PID crashes Docker.
for logfile in access.log error.log; do
  pattern="tail -F $PROJECT_DIR/logs/$logfile"
  pids=$(pgrep -f "$pattern" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    echo "killing leftover tail procs ($logfile): $pids"
    kill $pids 2>/dev/null || true
    sleep 0.2
    still=$(pgrep -f "$pattern" 2>/dev/null || true)
    [ -n "$still" ] && kill -9 $still 2>/dev/null || true
  fi
done

# 3. Compose teardown (skip if daemon unreachable — tmux/lsof cleanup above still
#    ran, and container will die with dockerd anyway)
if docker info >/dev/null 2>&1; then
  docker compose down --remove-orphans
  stragglers=$(docker ps -aq --filter "name=^${CONTAINER}$" 2>/dev/null || true)
  if [ -n "$stragglers" ]; then
    echo "force-removing straggler containers: $stragglers"
    docker rm -f $stragglers >/dev/null
  fi
else
  echo "docker daemon unreachable — skipping compose down"
fi

# 4. Report final state for easy verification
echo "---"
if docker info >/dev/null 2>&1; then
  echo "docker ps (ours):"
  docker ps -a --filter "name=^${CONTAINER}$" --format '  {{.Names}}  {{.Status}}' | grep . || echo "  (none)"
else
  echo "docker ps: daemon unreachable"
fi
echo "tmux sessions (ours):"
tmux ls 2>/dev/null | grep -E "^${SESSION}:" || echo "  (none)"
