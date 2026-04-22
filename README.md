# servery-www

Zadanie domowe 1 z kursu DevOps: Nginx z dwoma virtual hostami
(`project1.local`, `project2.local`) w Docker Compose, opakowane
w skrypty uruchamiające sesję tmux z panelami logów.

## Wymagania

- Docker Desktop z `docker compose` v2
- tmux (`brew install tmux` / `apt install tmux`)
- wolny port 4543 na localhost

## Użycie

```bash
./start.sh       # docker up + tmux "__servery-www" z 4 panelami logów
./stop.sh        # zatrzymuje wszystko i sprząta
```

`./start.sh` jest idempotentny i działa zarówno z wnętrza tmuxa
(`switch-client`) jak i poza nim (`attach`).

## /etc/hosts (jednorazowo)

```bash
sudo bash -c 'echo "127.0.0.1 project1.local" >> /etc/hosts'
sudo bash -c 'echo "127.0.0.1 project2.local" >> /etc/hosts'

curl http://project1.local:4543
curl http://project2.local:4543
```

Struktura plików i opis konfiguracji: [NGINX_VHOSTS.md](NGINX_VHOSTS.md).
