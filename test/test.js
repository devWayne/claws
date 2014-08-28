var app = require('./server');
var request = require('supertest').agent(app.listen());

describe('/ajax', function(){
  it('/ajax test', function(done){
    request
    .post('/ajax')
    .send({ name: 'Manny', species: 'cat' })
    .expect(200)
    .expect('{"name":"Manny","species":"cat"}', done);
  });
});