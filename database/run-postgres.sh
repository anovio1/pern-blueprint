# run-postgres.sh
set -e
HOST_PORT=6100
NAME=postgres-dev
DOCKER_REPO=postgres \
TAG=15.3

docker run --rm --name $NAME \
  -v "$PWD/pgdata:/var/lib/pgsql_data/data01" \
  -v "$PWD/scripts:/var/lib/pgsql_scripts/scripts" \
  -v "$PWD/mnt_data:/mnt/data" \
  -v "$PWD/pg_hba.conf:/etc/postgresql/pg_hba.conf" \
  -v "$PWD/postgresql.conf:/etc/postgresql/postgresql.conf" \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=postgres \
  -e PGDATA=/var/pgsql_data/data01 \
  -e POSTGRES_INITDB_ARGS="--data-checksums --encoding=UTF8" \
  -e POSTGRES_DB=devdb \
  -p ${HOST_PORT}:5432 \
  postgres:15.3 \
  postgres \
    -c 'config_file=/etc/postgresql/postgresql.conf' \
    -c 'hba_file=/etc/postgresql/pg_hba.conf' \