var express = require('express'),
  bodyParser = require('body-parser');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var config = require('../config'),
  route = require('./router');

var app = module.exports = express();
var router = express.Router();

var openURL = function(url) {
  switch (process.platform) {
    case "darwin":
      exec('open' + url);
      console.log(url)
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      spawn('xdg-open', [url]);
  }
  return;
}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

route(router, app);

router.get('/proxy', function(req, res) {
  res.render('proxy');
});

app.use(router);

app.listen(config.port, function() {
  console.log('server started');
  openURL(" http://" + config.host + ':' + config.port + '/proxy');
});