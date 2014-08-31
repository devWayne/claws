var express = require('express'),
  bodyParser = require('body-parser');

var ajaxRouter=require('./route/ajax'),
    testRouter=require('./route/test');

var app = module.exports = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

ajaxRouter(router,app);
testRouter(router,app);

router.get('/', function(req, res){
  res.render('home', {
    title: 'Params'
  });
});
app.use(router);

app.listen(3000, function() {
  console.log('server started');
}); 