var IFTTT_URL = 'https://maker.ifttt.com/trigger/{event}/with/key/{key}';
var iftttKey = widget.preferences.getItem('ifttt_key');

window.onload = function() {

	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === 'back' ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === 'main' ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
	
	$('body').on('click', 'a[data-event]', function(e) {
		var event = $(this).data('event');
		
		var endpoint = IFTTT_URL.replace(/\{event\}/g, event);
		endpoint = endpoint.replace(/\{key\}/g, iftttKey);
		console.log(endpoint);
		
		$.ajax({
			url: endpoint,
			async: false,
			success: function(data) {
				console.log(data);
				tau.back();
			},
			error: function(jqXHR, status, err) {
				// TODO: do something about this
				console.error('Failed to call endpoint');
			}
		});
	});
};
