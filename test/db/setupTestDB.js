'use strict';

process.env.NODE_ENV = 'test';
process.env.PORT = 10000;

const knex = require('../../src/db/knex');

module.exports.up = () => {
  return knex.migrate.latest()
    .then(() => knex.seed.run());
};

module.exports.down = () => {
  return knex.migrate.rollback();
};

module.exports.knex = () => {
  return knex;
};