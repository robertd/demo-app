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

//POST /contacts
function createContact(req, res, next) {
	res.send("Create new contact");
} 

//PUT /contacts/:id
function updateContact(req, res, next) {
	res.send("Update existing contact");
} 

//DELETE /contacts/:id
function deleteContact(req, res, next) {
	res.send("Delete contact");
} 

//GET /api/contacts/:id
function showContact(req, res, next) {
	res.send("Show contact");
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