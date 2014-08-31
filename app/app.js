var express = require('express'),
  bodyParser = require('body-parser');


var app = module.exports = express();



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


var router = express.Router();

router.get('/testget/:name', function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  console.log(req.params);
  res.send(200, { name: 'wayne' });

});

router.post('/testpost', function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  console.log(req.body);
});

router.get('/', function(req, res){
  res.render('home', {
    title: 'Params'
  });
});

router.post('/getAjax',function(req,res,next){
	var params=app.get('params');
	console.log(params);
	var _params={};
		_params[params.name]=params.value;
	res.send(200,_params);
})
router.post('/setAjax',function(req,res,next){
	app.set('params',req.body);
	console.log(app.get('params'));
});

app.use(router);

app.listen(3000, function() {
  console.log('server started');
}); 