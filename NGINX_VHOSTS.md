# Nginx Virtual Hosts — Homework 1

Dwa virtual hosty (`project1.local`, `project2.local`) serwowane z jednej
instancji Nginx w kontenerze Docker Compose. Host:4543 → kontener:80.

## Struktura

```
servery-www/
├── docker-compose.yml              # nginx:alpine, port 4543:80
├── nginx/
│   ├── 40-enable-sites.sh          # hook do /docker-entrypoint.d/
│   └── sites-available/
│       ├── project1.conf           # server_name project1.local
│       └── project2.conf           # server_name project2.local
├── www/
│   ├── project1/index.html         # <h1>Project 1</h1>
│   └── project2/index.html         # <h1>Project 2</h1>
└── logs/                           # bind-mount /var/log/nginx
```

Wzorzec Debiana (`sites-available` + `sites-enabled`) odwzorowany w Dockerze:
`nginx/sites-available/` montowane read-only do `/etc/nginx/sites-available/`,
rolę `sites-enabled/` pełni `/etc/nginx/conf.d/` (stockowy `nginx.conf`
z obrazu robi z niego `include *.conf`). Symlinki tworzy
`40-enable-sites.sh` przy starcie kontenera — odpowiednik `ln -s` +
`systemctl reload` z oryginalnego homeworku.

Server block:

| Dyrektywa                   | Znaczenie                                       |
|-----------------------------|-------------------------------------------------|
| `listen 80`                 | port wewnątrz kontenera (host: 4543)            |
| `server_name projectN.local`| Host header, po którym nginx routuje           |
| `root /var/www/projectN`    | bind-mount z `./www/`                           |
| `index index.html`          | plik domyślny dla żądań kończących się `/`      |
| `try_files $uri $uri/ =404` | brak pliku → 404                                |
