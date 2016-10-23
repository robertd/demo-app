'use strict';

var Promise = require('bluebird');
var contactModel = require('../models/contact');

module.exports = {
	create: createContact,
	update: updateContact,
	delete: deleteContact,
	show: showContact,
	showAll: showAllContacts
};

//POST /api/contacts
function createContact(req, res, next) {
  let created = req.body;

  contactModel.createContact(created)
    .then((result) => {
      res.json({
        status: 'success',
        data: result
      })
    })
    .catch(next);
} 

//PUT /api/contacts/:id
function updateContact(req, res, next) {
	let contactId = req.params.id;
  let updates = req.body;

  contactModel.updateContact(contactId, updates)
    .then((updated) => {
      res.json({
        status: 'success',
        updated: updated
      })
    })
    .catch(next);
}

//DELETE /api/contacts/:id
function deleteContact(req, res, next) {
  let contactId = req.params.id;
  
  contactModel.deleteContact(contactId)
    .then((deleted) => {
      res.json({
        status: 'success',
        deleted: deleted
      })
    })
    .catch(next);
} 

//GET /api/contacts/:id
function showContact(req, res, next) {
  let contactId = req.params.id;

  contactModel.showContact(contactId)
    .then((result) => {
      res.json({
        status: 'success',
        data: result
      })
    })
    .catch(next);
}

//GET /api/contacts
function showAllContacts(req, res, next) {
	contactModel.showAllContacts()
    .then((results) => {
      res.json({
        status: 'success',
        data: results
      })
    })
    .catch(next);
}