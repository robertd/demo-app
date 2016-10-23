'use strict';

const express = require('express');
const router = express.Router();
const pkg = require('../../package.json');

router.get('/', version);

module.exports = router;

function version(req, res, next) {
  res.json({
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    author: pkg.author,
    dependencies: pkg.dependencies
  });
}