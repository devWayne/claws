var ajax=require('../controller/ajax');


module.exports = function(router,app) {

	router.post('/getAjax',ajax.ajaxGet);
	router.post('/setAjax',ajax.ajaxSet);

}