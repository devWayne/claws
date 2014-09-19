var ajax=require('./controllers/ajax'),
	proxy=require('./controllers/proxy');


module.exports = function(router,app) {
	router.post('/getAjax',ajax.ajaxGet);
	router.post('/setAjax',ajax.ajaxSet);
	router.post('/proxy/setconfig',proxy.proxySet);
	router.get('/testget/:name', function(req, res, next) {
		console.log('%s %s %s', req.method, req.url, req.path);
		console.log(req.params);
		res.send(200, {
			name: 'wayne'
		});
	});

	router.post('/testpost', function(req, res, next) {
		console.log('%s %s %s', req.method, req.url, req.path);
		console.log(req.body);
	});
}

