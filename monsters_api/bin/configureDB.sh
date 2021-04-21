#!/bin/bash

export PGPASSWORD="password"

database="monstersdb"

echo "Configuring database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user < ./bin/sql/monsters.sql

echo "$database configured"