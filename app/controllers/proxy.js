var express = require('express'),
	fs = require('fs'),
	path=require('path'),
	hps=require('hps');
var app = express();
exports.proxySet = function(req, res, next) {
	var _list;
	app.set('proxyparams', req.body);
	console.log(app.get('proxyparams').urlList);
	_list = app.get('proxyparams').urlList;
	_list = reload(_list);
	fs.writeFile('./proxyconfig.js', 'exports.map=' + _list, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('success');
		}
	});
	configpath=path.resolve('./proxyconfig.js');
	hps.main(configpath);
}

function reload(_list) {
	var r = "";
	r = r + "[";
	for (var i = 0; i < _list.length; i++) {
		if (i == _list.length - 1) {
			r = r + "[" + _list[i].toString() + "]";
		} else {
			r = r + "[" + _list[i].toString() + "],";
		}
	}
	r = r + "]";
	return r;
}