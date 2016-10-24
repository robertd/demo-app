'use strict';

const knex = require('../db/knex');
const chance = require('chance').Chance();
const _ = require('lodash');

module.exports = {
  byStates: byStates,
  chart: chart
};

function byStates() {
  return knex
    .select(knex.raw('state, count(*)'))
    .from('contacts')
    .groupBy('state')
    .debug(process.env['KNEX_DEBUG']);
}

function chart() {
  var time = [ 143134652600,
              143234652600,
              143340052600,
              143366652600,
              143410652600,
              143508652600,
              143569652600,
              143579652600,
              143589652600,
              143599652600];

  return _.times(10, () => {
    return {
      'key': chance.state({ full: true }),
      'values': _.times(10, (i) => { return [time[i], chance.d100()]; })
    };
  });
}
