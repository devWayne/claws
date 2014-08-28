var express = require('express'),
  bodyParser = require('body-parser');



var app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var router = express.Router();

router.get('/test/:id', function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
 // console.log(req.body);
  console.log(req.params);
  res.body=req.params;

});

app.use(router);

app.listen(3000, function() {
  console.log('server started');
});