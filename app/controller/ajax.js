exports.ajaxSet = function(req, res, next) {
	app.set('params', req.body);
	console.log(app.get('params'));
}