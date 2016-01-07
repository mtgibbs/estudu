/*global tau*/
/*global widget*/
/*global $*/

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
				tau.back();
			}
		}
	} );
	
	// load page animations for new lists on creation
	window.addEventListener('pagecreate', function() {
		var page = document.getElementById("pageAnimation"),
		listHelper,
		elScroller;

		page.addEventListener("pagebeforeshow", function () {
			var list;
	
			elScroller = page.querySelector(".ui-scroller");
			if (elScroller) {
				list = elScroller.querySelector(".ui-listview");
			}
	
			if (elScroller && list) {
				listHelper = tau.helper.SnapListStyle.create(list, {animate: "scale"});
	
				elScroller.setAttribute("tizen-circular-scrollbar", "");
			}
		});
	
		page.addEventListener("pagebeforehide", function () {
			if (listHelper) {
				listHelper.destroy();
	
				listHelper = null;
	
				if (elScroller) {
					elScroller.removeAttribute("tizen-circular-scrollbar");
				}
			}
		});
	});
	
	$('body').on('click', 'a[data-event]', function() {
		var event = $(this).data('event');
        var eventName = $(this).text();
		var endpoint = IFTTT_URL.replace(/\{event\}/g, event);
		endpoint = endpoint.replace(/\{key\}/g, iftttKey);

        $('#confirmActionName').text(eventName);

		var confirmPopup = document.getElementById('confirmPopup');
        tau.openPopup(confirmPopup);

		confirmPopup.addEventListener('popupshow', function(e) {

            // immediately unbind the listener
            e.target.removeEventListener(e.type, arguments.callee);

			var confirmBtn = document.getElementById('confirm');
			confirmBtn.addEventListener('click', function(e) {

                // immediately unbind the listener
                e.target.removeEventListener(e.type, arguments.callee);

				$.ajax({
					url: endpoint,
					async: false
				}).done(function() {
					// nothing here...
				}).fail(function() {
					console.error('Failed to call endpoint');

					confirmPopup.addEventListener('popuphide', function(e) {

                        // immediately unbind the listener
                        e.target.removeEventListener(e.type, arguments.callee);
						tau.openPopup('#errorToast');
					});
				}).always(function() {
					tau.closePopup();
				});
			});
		});
	});
};
