var request = require('supertest');
var app = require('./../../app');

describe('request to the route path', function(){
  it('Returns a 200 status code', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });