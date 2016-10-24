'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id').primary();
    table.string('first_name', 30);
    table.string('last_name', 30);
    table.string('email', 30);
    table.string('phone', 30);
    table.string('address', 60);
    table.string('city', 30);
    table.string('state', 20);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contacts');
};