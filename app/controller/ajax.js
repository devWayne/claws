var express=require('express');
var app=express();
exports.ajaxSet = function(req, res, next) {
	app.set('params', req.body);
	console.log(app.get('params'));
}

exports.ajaxGet = function(req, res, next) {
	var params = app.get('params');
	if (!params) {
		console.log('params havent benn set');
	} else {
		console.log('httptool will return' + params);
		var _params = {};
		_params[params.name] = params.value;
		res.status(200).send(_params);
	}
}