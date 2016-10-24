'use strict';

const chance = require('chance').Chance();
const _ = require('lodash');

exports.seed = function(knex, Promise) {
  let records = [];
  
  _.times(25, () => {
      records.push(knex('contacts').insert({
        first_name: chance.first(), 
        last_name: chance.last(), 
        email: chance.email(), 
        address: chance.address(),
        phone: chance.phone(),
        city: chance.city(),
        state: chance.state({ full: true })
      }));
    }
  );

  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(() => {
      return Promise.all(records);
    });
};
