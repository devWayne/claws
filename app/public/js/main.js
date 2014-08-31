$(function(){
	var startBtn=$('#start'),
		postParamName=$('#postParamName'),
		postParamValue=$('#postParamValue'),
		 _event={
		startCb:function(e){
			e.preventDefault();
			$.ajax({
				url:'http://localhost:3000/setAjax',
				type:'POST',
				dataType:'json',
				data:{
					name:postParamName.val(),
					value:postParamValue.val()
				},
				success:function(){
					console.log('Params set succees');
				}

			});
		}
	};
	startBtn.on('click',_event.startCb);

})