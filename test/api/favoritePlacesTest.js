'use strict';

const request = require('supertest');
const chai = require('chai');
const should = chai.should();

const testDB = require('../db/setupTestDB');
const app = require('../../src/app');

describe('API test - Places', () => {
  before(() => testDB.up());
  after(() => testDB.down());

  describe('Favortie Places', () => {
    it('Show favorite places for John Doe', (done) => {
      request(app)
        .get('/api/places/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(2);
        })
        .expect(200, done);
    });

    it('Delete John Does favorite place', (done) => {
      request(app)
        .delete('/api/places/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.deleted.should.equal(1);
        })
        .expect(200, done);
    });

    it('Show 1 favorite places for John Doe after deletion', (done) => {
      request(app)
        .get('/api/places/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(1);
        })
        .expect(200, done);
    });

    it('Create new favorite place for John Doe', (done) => {
      request(app)
        .post('/api/places')
        .send({
          'contact_id': 1,
          'geo_json': { 'foo': 'bar' },
          'description': 'Favorite place #3'
        })
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.data.should.have.length(1);
        })
        .expect(200, done);
    });

    it('Show 2 favorite places for John Doe', (done) => {
      request(app)
        .get('/api/places/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(2);
        })
        .expect(200, done);
    });
  });
});