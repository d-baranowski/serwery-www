# Nginx Virtual Hosts — Homework 1

Dwa virtual hosty (`project1.local`, `project2.local`) serwowane z jednej
instancji Nginx działającej w kontenerze Docker Compose. Lokalny port hosta:
**4543** (kontener słucha na 80).

## Struktura konfiguracji

```
servery-www/
├── docker-compose.yml              # nginx:alpine, port 4543:80
├── nginx/
│   └── sites-available/
│       ├── project1.conf           # server_name project1.local
│       └── project2.conf           # server_name project2.local
├── www/
│   ├── project1/index.html         # <h1>Project 1</h1>
│   └── project2/index.html         # <h1>Project 2</h1>
└── logs/                           # bind-mount /var/log/nginx (access.log, error.log)
```

Odwzorowanie wzorca Debiana (`sites-available` + `sites-enabled`) w Dockerze:

- `nginx/sites-available/` jest montowany read-only do
  `/etc/nginx/sites-available/` w kontenerze.
- Rolę `sites-enabled/` pełni `/etc/nginx/conf.d/`, z którego stockowy
  `nginx.conf` obrazu `nginx:alpine` robi `include *.conf`.
- W `command:` docker-compose'a wykonujemy te same `ln -s` co w homeworku
  (bez `sudo`, bez `systemctl reload` — start kontenera robi to samo).

Każdy server block zawiera:

| Dyrektywa | Wartość | Znaczenie |
|---|---|---|
| `listen 80` | port wewnątrz kontenera | host-owy :4543 jest mapowany na :80 |
| `server_name` | `projectN.local` | Host header, po którym Nginx routuje żądanie |
| `root` | `/var/www/projectN` | katalog z plikami (bind-mount z `./www/`) |
| `index index.html` | plik domyślny | zwracany dla żądań kończących się `/` |
| `try_files $uri $uri/ =404` | | jeśli plik nie istnieje → 404 zamiast fallbacku |

## Uruchomienie

```bash
# Start (docker + tmux session "__servery-www" z 4 panelami logów)
./start.sh

# Stop (kill tmux + docker compose down + sprzątanie)
./stop.sh

# /etc/hosts (jednorazowo)
sudo bash -c 'echo "127.0.0.1 project1.local" >> /etc/hosts'
sudo bash -c 'echo "127.0.0.1 project2.local" >> /etc/hosts'

# Test
curl http://project1.local:4543
curl http://project2.local:4543
```

`./start.sh` działa zarówno z poziomu tmuxa (`switch-client`), jak i poza nim
(`attach`). Ponowne uruchomienie podpina się do istniejącej sesji zamiast
tworzyć nową.

Bez tmuxa:

```bash
docker compose up -d
tail -f logs/access.log        # lub
docker compose logs -f nginx
```

## Jak dodać nowy virtual host

1. Utwórz katalog z plikami:
   ```bash
   mkdir -p www/project3
   echo "<h1>Project 3</h1>" > www/project3/index.html
   ```
2. Utwórz config na bazie istniejących:
   ```bash
   cp nginx/sites-available/project1.conf nginx/sites-available/project3.conf
   # edytuj server_name i root w nowym pliku
   ```
3. Dodaj symlink w `command:` `docker-compose.yml`:
   ```yaml
   ln -sf /etc/nginx/sites-available/project3.conf /etc/nginx/conf.d/project3.conf &&
   ```
4. Dopisz wpis do `/etc/hosts`:
   ```bash
   sudo bash -c 'echo "127.0.0.1 project3.local" >> /etc/hosts'
   ```
5. Przeładuj:
   ```bash
   docker compose up -d --force-recreate nginx
   ```

## Jak debugować problemy z vhostami

### Krok 1: Czy kontener w ogóle żyje

```bash
docker compose ps
docker compose logs nginx
```

Jeśli widać `nginx: [emerg] ...` — błąd składni configa. Najczęstsze:
brakujący średnik, literówka w dyrektywie, nieistniejący `root`.

### Krok 2: Test składni configa bez restartu

```bash
docker compose exec nginx nginx -t
```

### Krok 3: Który server block odpowiedział

Nginx wybiera server block po `Host:` headerze żądania. Jeśli curl trafia
w niewłaściwego vhosta:

```bash
# Wymusza konkretny Host header (obchodzi /etc/hosts)
curl -H "Host: project1.local" http://localhost:4543
curl -v http://project1.local:4543        # -v pokazuje cały request/response
```

Jeśli `server_name` nie pasuje do żadnego bloku, Nginx bierze pierwszy
server block jako domyślny — to typowa przyczyna "zawsze widzę project1".
Naprawa: dodaj `default_server` do właściwego `listen`, albo popraw
`/etc/hosts` / Host header.

### Krok 4: Logi

```bash
tail -f logs/access.log                # wszystkie żądania
tail -f logs/error.log                 # tylko błędy nginx
grep -E ' [45][0-9]{2} ' logs/access.log   # tylko 4xx/5xx
awk '{print $9}' logs/access.log | sort | uniq -c   # rozkład kodów HTTP
```

### Krok 5: Co widzi kontener

```bash
docker compose exec nginx ls /etc/nginx/conf.d/         # aktywne configi
docker compose exec nginx ls /var/www/                  # zawartość rootów
docker compose exec nginx cat /etc/nginx/conf.d/project1.conf
```

### Częste błędy

| Objaw | Przyczyna | Naprawa |
|---|---|---|
| `curl http://project1.local` → connection refused | brak portu 4543 w URL | `curl http://project1.local:4543` |
| Zawsze ten sam vhost | brak wpisu w `/etc/hosts`, żądanie idzie po IP nie po nazwie | dodaj wpis, sprawdź `curl -v` |
| 403 Forbidden | brak `index.html`, lub prawa do pliku | utwórz plik, sprawdź `ls www/projectN/` |
| 404 na istniejący plik | zły `root` w configu albo bind-mount nie wszedł | `docker compose exec nginx ls /var/www/projectN` |
| Zmiana configu nie działa | nginx nie został przeładowany | `docker compose up -d --force-recreate nginx` |
