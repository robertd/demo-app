'use strict';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env['PG_HOST'] || 'localhost',
    port: process.env['PG_PORT'] || 5432,
    database: process.env['PG_DB'] || 'demo',
    user: process.env['PG_USER'] || 'demo',
    password: process.env['PG_PASS'] || 'demo'
  },
  pool: {
  	min: 2,
  	max: 10
  }
};