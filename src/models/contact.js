'use strict';

const Knex = require('knex');
const knexConfig = require('../../config/knexfile');

const knex = Knex(knexConfig);

module.exports = {
  createContact: createContact,
  updateContact: updateContact,
  deleteContact: deleteContact,
  showContact: showContact,
  showAllContacts: showAllContacts
};

function createContact(contact) {
  return knex('contacts')
    .returning('*')
    .insert(contact)
    .debug(process.env['KNEX_DEBUG']);
}

function updateContact(contactId, updates) {
  return knex('contacts')
    .where('id', contactId)
    .update(updates)
    .debug(process.env['KNEX_DEBUG']);
}

function deleteContact(contactId) {
  return knex('contacts')
    .where('id', contactId)
    .del()
    .debug(process.env['KNEX_DEBUG']);
}

function showContact(contactId) {
  return knex
    .select('*')
    .from('contacts')
    .where('id', contactId)
    .debug(process.env['KNEX_DEBUG']);
}

function showAllContacts() {
	return knex
		.select('*')
    .from('contacts')
    .orderBy('created_at', 'ASC')
    .debug(process.env['KNEX_DEBUG']);
}

