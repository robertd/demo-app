'use strict';

const express = require('express');
const router = express.Router();
const contacts = require('../api/contacts');

router.get('/contacts', contacts.showAll);
router.get('/contacts/:id', contacts.show);
router.post('/contacts', contacts.create);
router.put('/contacts/:id', contacts.update);
router.delete('/contacts/:id', contacts.delete);

module.exports = router;