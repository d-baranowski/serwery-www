# servery-www

Nginx z dwoma virtual hostami (`project1.local`, `project2.local`)
w Docker Compose + testy obciążeniowe JMeter. Tmux łączy wszystko
w sesję z oknami logów i benchmarku.

## Wymagania

- Docker Desktop z `docker compose` v2
- tmux, htop, ctop, jq (`brew install tmux htop ctop jq`)
- gnuplot — opcjonalnie, do generowania wykresów CPU/MEM (`brew install gnuplot`)
- wolny port 4543 na localhost

## Użycie

```bash
./start.sh       # docker up + tmux "__servery-www" (okna: logs, bench)
./stop.sh        # zatrzymuje wszystko i sprząta
```

`./start.sh` jest idempotentny i działa zarówno z wnętrza tmuxa
(`switch-client`) jak i poza nim (`attach`).

Okno **logs** — 4 panele: `docker compose logs`, `tail access.log`,
`tail error.log`, shell ze ściągą curl/grep/awk.
Okno **bench** — 3 panele: `htop`, `ctop -f servery-nginx` (sparkline
CPU/MEM kontenera), shell ze skryptami testów.

## /etc/hosts (jednorazowo)

```bash
sudo bash -c 'echo "127.0.0.1 project1.local" >> /etc/hosts'
sudo bash -c 'echo "127.0.0.1 project2.local" >> /etc/hosts'

curl http://project1.local:4543
curl http://project2.local:4543
```

## Testy obciążeniowe

JMeter w kontenerze (`justb4/jmeter`) strzela w `host.docker.internal:4543`.
Każdy test: rampup → 60s stałego obciążenia → stop. Raporty HTML i JTL
lądują w `jmeter/results/`.

```bash
./bench.sh 50       # pojedynczy test: 50 userów
./bench.sh 500
./bench.sh 5000
./bench-all.sh      # wszystkie 3 + tabelka + wykresy CPU/MEM
```

Pełny przebieg `./bench-all.sh` zajmuje ~6 min. Przy 5000 userach
nginx/Docker Desktop są realnie obciążone — to jest właśnie to, co
pokazuje raport.

Artefakty per przebieg w `jmeter/results/`:

- `run-*u-*.jtl` — surowe wyniki (CSV JMeter)
- `run-*u-*-report/index.html` — raport HTML JMetera (wykresy czasów odpowiedzi, throughput, błędy)
- `run-*u-*-monitor.csv` — próbki CPU/MEM kontenera (`time_s,cpu_pct,mem_mib`)
- `run-*u-*-monitor.png` — wykres CPU+MEM w czasie (jeśli `gnuplot` zainstalowany) — do wklejenia na Slack

Struktura plików i opis konfiguracji: [NGINX_VHOSTS.md](NGINX_VHOSTS.md).
