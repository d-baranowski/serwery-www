#!/bin/sh
set -e

rm -f /etc/nginx/conf.d/default.conf
ln -sf /etc/nginx/sites-available/project1.conf /etc/nginx/conf.d/project1.conf
ln -sf /etc/nginx/sites-available/project2.conf /etc/nginx/conf.d/project2.conf
echo 'access_log /dev/stdout; error_log /dev/stderr;' > /etc/nginx/conf.d/zzz-stdout.conf
