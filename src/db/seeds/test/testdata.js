'use strict';

exports.seed = (knex, Promise) => {
  return Promise.join(
    knex('contacts').del(),
    knex('favorite_places').del(),

    knex('contacts').insert({
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john_doe@acme.net',
      address: '123 Maple Drive',
      phone: '(720) 123-4567',
      city: 'Denver',
      state: 'Colorado'
    }),
    knex('contacts').insert({
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane_doe@acme.net',
      address: '123 Apple Drive',
      phone: '(720) 765-4321',
      city: 'Denver',
      state: 'Colorado'
    }),
    knex('contacts').insert({
      id: 3,
      first_name: 'Jake',
      last_name: 'Doe',
      email: 'jake_doe@acme.net',
      address: '123 Oak Drive',
      phone: '(720) 123-0000',
      city: 'Denver',
      state: 'Colorado'
    }),

    knex('favorite_places').insert({
      id: 1,
      contact_id: 1,
      geo_json: '{"foo": "baz"}',
      description: 'Lorem ipsum dolor sit amet, hymenaeos accumsan consectetuer sociis tortor ut. Leo faucibus eu cras nunc dolor nam.'
    }),
    knex('favorite_places').insert({
      id: 2,
      contact_id: 1,
      geo_json: '{"foo": "bar"}',
      description: 'Lorem ipsum dolor sit amet, hymenaeos accumsan consectetuer sociis tortor ut. Leo faucibus eu cras nunc dolor nam.'
    }),
    knex('favorite_places').insert({
      id: 3,
      contact_id: 2,
      geo_json: '{"bar": "foo"}',
      description: 'Lorem ipsum dolor sit amet, hymenaeos accumsan consectetuer sociis tortor ut. Leo faucibus eu cras nunc dolor nam.'
    }),
    knex('favorite_places').insert({
      id: 4,
      contact_id: 3,
      geo_json: '{"baz": "foo"}',
      description: 'Lorem ipsum dolor sit amet, hymenaeos accumsan consectetuer sociis tortor ut. Leo faucibus eu cras nunc dolor nam.'
    })

  );
};