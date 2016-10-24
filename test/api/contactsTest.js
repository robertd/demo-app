'use strict';

const request = require('supertest');
const chai = require('chai');
const should = chai.should();

const testDB = require('../db/setupTestDB');
const app = require('../../src/app');

describe('API test - Contacts', () => {
  before(() => testDB.up());
  after(() => testDB.down());

  describe('Contacts', () => {
    it('Responds with 3 contacts', (done) => {
      request(app)
        .get('/api/contacts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(3);
        })
        .expect(200, done);
    });

    it('Responds with John Doe contact info', (done) => {
      request(app)
        .get('/api/contacts/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(1);
          res.body.data[0].should.have.property('first_name').and.equal('John');
          res.body.data[0].should.have.property('last_name').and.equal('Doe');
          res.body.data[0].should.have.property('email').and.equal('john_doe@acme.net');
          res.body.data[0].should.have.property('address').and.equal('123 Maple Drive');
          res.body.data[0].should.have.property('phone').and.equal('(720) 123-4567');
          res.body.data[0].should.have.property('city').and.equal('Denver');
          res.body.data[0].should.have.property('state').and.equal('Colorado');
        })
        .expect(200, done);
    });

    it('Responds with Jane Doe contact info', (done) => {
      request(app)
        .get('/api/contacts/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(1);
          res.body.data[0].should.have.property('first_name').and.equal('Jane');
          res.body.data[0].should.have.property('last_name').and.equal('Doe');
          res.body.data[0].should.have.property('email').and.equal('jane_doe@acme.net');
          res.body.data[0].should.have.property('address').and.equal('123 Apple Drive');
          res.body.data[0].should.have.property('phone').and.equal('(720) 765-4321');
          res.body.data[0].should.have.property('city').and.equal('Denver');
          res.body.data[0].should.have.property('state').and.equal('Colorado');
        })
        .expect(200, done);
    });

    it('Delete John Does contact info', (done) => {
      request(app)
        .delete('/api/contacts/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.deleted.should.equal(1);
        })
        .expect(200, done);
    });

    it('There is only 2 contacts after delete', (done) => {
      request(app)
        .get('/api/contacts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.data.should.have.length(2);
        })
        .expect(200, done);
    });

    it('Create new contact for Johhny Cash', (done) => {
      request(app)
        .post('/api/contacts')
        .send({
          'first_name': 'Johnny',
          'last_name': 'Cash'
        })
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.data.should.have.length(1);
          res.body.data[0].should.have.property('first_name').and.equal('Johnny');
          res.body.data[0].should.have.property('last_name').and.equal('Cash');
          res.body.data[0].should.have.property('address').and.equal(null);
        })
        .expect(200, done);
    });

    it('Update address for Johnny Cash', (done) => {
      request(app)
        .put('/api/contacts/1')
        .send({
          'address': '123 Memory Lane'
        })
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.updated.should.equal(1);
        })
        .expect(200, done);
    });

    it('Check contact info for Johnny Cash', (done) => {
      request(app)
        .get('/api/contacts/1')
        .send({
          'address': '123 Memory Lane'
        })
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.data.should.have.length(1);
          res.body.data[0].should.have.property('first_name').and.equal('Johnny');
          res.body.data[0].should.have.property('last_name').and.equal('Cash');
          res.body.data[0].should.have.property('address').and.equal('123 Memory Lane');
        })
        .expect(200, done);
    });
  });
});