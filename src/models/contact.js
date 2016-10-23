'use strict';

const Knex = require('knex');
const knexConfig = require('../../config/knexfile');

const knex = Knex(knexConfig);

module.exports = {
  showAllContacts: showAllContacts
};

function showAllContacts() {
	return knex
		.select('*')
    .from('contacts')
    .orderBy('created_at', 'ASC')
    .debug(process.env['KNEX_DEBUG']);
}

