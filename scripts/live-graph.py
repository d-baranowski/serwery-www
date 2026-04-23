#!/usr/bin/env python3
"""Live CPU/MEM sparkline monitor for a Docker container.

Usage: live-graph.py [container-name]  (default: servery-nginx)

Designed to run in a small tmux pane. Fits in any width; uses unicode
block characters (▁▂▃▄▅▆▇█) to draw a time-series sparkline for CPU%
and memory usage (MiB). History keeps last ~10 minutes of samples.
"""
import re
import shutil
import subprocess
import sys
import time

CONTAINER = sys.argv[1] if len(sys.argv) > 1 else "servery-nginx"
BARS = "▁▂▃▄▅▆▇█"  # 8 levels; no blank, so "data present" is always visible
MEM_RE = re.compile(r"([\d.]+)(KiB|MiB|GiB|B)")


def poll():
    """One sample: returns (cpu_pct, mem_mib) or (None, None) on error."""
    try:
        r = subprocess.run(
            ["docker", "stats", "--no-stream", "--format",
             "{{.CPUPerc}}|{{.MemUsage}}", CONTAINER],
            capture_output=True, text=True, timeout=10,
        )
        if r.returncode != 0 or not r.stdout.strip():
            return None, None
        cpu_s, mem_s = r.stdout.strip().split("|", 1)
        cpu = float(cpu_s.rstrip("%"))
        m = MEM_RE.match(mem_s.split()[0])
        if not m:
            return cpu, None
        num, unit = float(m.group(1)), m.group(2)
        mib = {"B": num / 1048576, "KiB": num / 1024,
               "MiB": num, "GiB": num * 1024}[unit]
        return cpu, mib
    except Exception:
        return None, None


def spark(values, width, lo=None, hi=None):
    if not values:
        return ""
    v = values[-width:]
    lo = min(v) if lo is None else lo
    hi = max(v) if hi is None else hi
    rng = hi - lo if hi > lo else 1
    return "".join(
        BARS[min(7, max(0, int((x - lo) / rng * 7)))] for x in v
    )


def main():
    cpu_hist, mem_hist = [], []
    while True:
        cpu, mem = poll()
        if cpu is not None:
            cpu_hist.append(cpu)
            cpu_hist = cpu_hist[-600:]
        if mem is not None:
            mem_hist.append(mem)
            mem_hist = mem_hist[-600:]

        cols, _ = shutil.get_terminal_size((80, 20))
        graph_w = max(20, cols - 42)

        print("\033[2J\033[H", end="")
        print(f"{CONTAINER}  (n={len(cpu_hist)})")
        if cpu_hist:
            now = cpu_hist[-1]
            peak = max(cpu_hist)
            avg = sum(cpu_hist) / len(cpu_hist)
            # Auto-scale sparkline so spikes stand out. Absolute numbers are
            # in the "now/peak/avg" header row above.
            print(f"CPU  now={now:.1f}  peak={peak:.1f}  avg={avg:.1f}")
            print(spark(cpu_hist, graph_w))
        else:
            print("CPU  (waiting…)")

        if mem_hist:
            now = mem_hist[-1]
            peak = max(mem_hist)
            print(f"MEM  now={now:.1f}  peak={peak:.1f}  (MiB)")
            print(spark(mem_hist, graph_w))
        else:
            print("MEM  (waiting…)")

        sys.stdout.flush()
        # docker stats --no-stream already takes ~2s per call on macOS;
        # no extra sleep needed.


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print()
