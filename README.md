# migration
Its DB migration based on Postgre

follow this instructure
Install node
run npm i
create enviremonet variable file
configue your .env file like bellow
===========
[POSTGRESQL]
PG_USER = username
PG_PASSWORD = password
PG_HOST = localhost(IP address)
PG_DBNAME = Database Name
PG_PORT = 5432(your own port)
===========
run src/migrate.js


CLI for adding new migration file => npx node-pg-migrate create <file_name>