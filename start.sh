#!/usr/bin/env bash
set -euo pipefail

SESSION="__servery-www"
PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

command -v tmux   >/dev/null || { echo "tmux not installed"   >&2; exit 1; }
command -v docker >/dev/null || { echo "docker not installed" >&2; exit 1; }

docker compose up -d >/dev/null

mkdir -p logs
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

SHELL_PANE_CMD=$(cat <<'PANE'
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

# Layout after splits + tiled:
#   ┌─────────────────┬──────────────┐
#   │ docker logs -f  │ access.log   │
#   ├─────────────────┼──────────────┤
#   │ shell + cheat   │ error.log    │
#   └─────────────────┴──────────────┘

tmux new-session   -d -s "$SESSION" -n main -c "$PROJECT_DIR" "docker compose logs -f nginx"
tmux split-window  -h -t "$SESSION:main" -c "$PROJECT_DIR" "tail -F "$PROJECT_DIR/logs/access.log""
tmux split-window  -v -t "$SESSION:main" -c "$PROJECT_DIR" "tail -F "$PROJECT_DIR/logs/error.log""
tmux select-pane      -t "$SESSION:main" -L
tmux split-window  -v -t "$SESSION:main" -c "$PROJECT_DIR" "$SHELL_PANE_CMD"
tmux select-layout    -t "$SESSION:main" tiled

attach_or_switch
