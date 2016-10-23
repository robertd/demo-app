'use strict';

const express = require('express');
const router = express.Router();

const contacts = require('../api/contacts');
const favoritePlaces = require('../api/favorite_places');

router.get('/contacts', contacts.showAll);
router.get('/contacts/:id', contacts.show);
router.post('/contacts', contacts.create);
router.put('/contacts/:id', contacts.update);
router.delete('/contacts/:id', contacts.delete);

router.post('/places', favoritePlaces.create);
router.get('/places/:contact_id', favoritePlaces.show);
router.delete('/places/:id', favoritePlaces.delete);

module.exports = router;