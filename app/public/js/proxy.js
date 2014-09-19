$(function() {
	var urlFrom = $('.url-from'),
		urlTo = $('.url-to');


	$('#start').on('click', function(e) {
		var urlList = chgList();
		$.ajax({
			url: 'http://localhost:3000/proxy/setconfig',
			type: 'post',
			dataType: 'json',
			data: {
				urlList: urlList
			},
			success: function() {
				console.log('proxy configuarations are set')
			}
		})
	})

	function chgList() {
		var _urlList = [],
			urlList = [];
		for (var i = 0; i < urlFrom.length; i++) {
				if (urlFrom.eq(i)&& urlTo.eq(i)) {
					_urlList.push([urlFrom.eq(i).val(), urlTo.eq(i).val()]);
				}
		}

		return _urlList;
	}


})