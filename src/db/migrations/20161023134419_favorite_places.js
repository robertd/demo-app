'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_places', (table) => {
    table.increments('id').primary();
    table.integer('contact_id');
    table.foreign('contact_id_pk').references('contact_id');
    table.jsonb('geo_json');
    table.text('description');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorite_places');
};
