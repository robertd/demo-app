'use strict';

const dockerIP = require('docker-ip');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env['PG_HOST'] || dockerIP(),
      port: process.env['PG_PORT'] || 5432,
      database: process.env['PG_DB'] || 'dev',
      user: process.env['PG_USER'] || 'dev',
      password: process.env['PG_PASS'] || 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    },

    seeds: {
      directory: __dirname + '/seeds/development'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: dockerIP(),
      port: 5432,
      database: 'test',
      user: 'test',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/test'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env['PG_HOST'] || 'localhost',
      port: process.env['PG_PORT'] || 5432,
      database: process.env['PG_DB'],
      user: process.env['PG_USER'],
      password: process.env['PG_PASS']
    },
    pool: {
      min: 2,
      max: 10
    },    
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }
};