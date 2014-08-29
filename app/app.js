var express = require('express'),
  bodyParser = require('body-parser');



var app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var router = express.Router();

router.get('/test/:name', function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
 // console.log(req.body);
  console.log(req.params);
  res.send(200, { name: 'wayne' });

});

app.use(router);

app.listen(3000, function() {
  console.log('server started');
});