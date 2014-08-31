var app = require('../app/app');
var request = require('supertest').agent(app.listen());

describe('/testcase', function(){
  it('/test get test', function(done){
    request
    .get('/testget/wayne')
    .expect(200)
    .expect('{"name":"wayne"}',done);
  });
});