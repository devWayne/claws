var ajax=require('../controller/ajax');


module.exports = function(router,app) {

	router.post('/getAjax',ajax.getAjax);
	router.post('/setAjax',ajax.setAjax);

}