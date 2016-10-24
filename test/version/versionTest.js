'use strict';

const request = require('supertest');
const express = require('express');
const version = require('../../src/routes/version');
const pkg = require('../../package.json');
const app = express();

app.use('/version', version);

describe('get app version info', () => {
  it('responds with application info', (done) => {
    request(app)
      .get('/version')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        author: pkg.author,
        dependencies: pkg.dependencies
      }, done);
  })
});