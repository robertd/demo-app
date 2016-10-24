

## Installation
* `npm install`
* `bower install`

## Requirements

* Postgres (through Docker)
  * Create `dev` user and `dev` database
  * Create `test` user and `test` database

## Migrations
Run `./node_modules/knex/bin/cli.js migrate:latest --env development --knexfile src/db/knexfile.js`

## Seed data
Run `./node_modules/knex/bin/cli.js seed:run --env development --knexfile src/db/knexfile.js`

## Running the app
* `npm start`
* `http://localhost:3000`

## Test - (depends on docker pg instance)
*`npm test`
