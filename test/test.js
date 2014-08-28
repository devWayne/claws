var app = require('../app/app');
var request = require('supertest').agent(app.listen());

describe('/testcase', function(){
  it('/test get test', function(done){
    request
    .get('/test/id123')
    .expect(200)
    .expect('{"id":"id123"}', done);
  });
});