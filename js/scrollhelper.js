(function() {
	console.log('Initialized scrollhelper.js');
	var page = document.getElementById('pageAnimation'), listHelper, elScroller;

	page.addEventListener('pagebeforeshow', function() {
		var list;

		elScroller = page.querySelector(".ui-scroller");
		if (elScroller) {
			list = elScroller.querySelector(".ui-listview");
		}

		if (elScroller && list) {
			listHelper = tau.helper.SnapListStyle.create(list, {
				animate : 'scale'
			});

			elScroller.setAttribute('tizen-circular-scrollbar', '');
		}
	});

	page.addEventListener('pagebeforehide', function() {
		if (listHelper) {
			listHelper.destroy();

			listHelper = null;

			if (elScroller) {
				elScroller.removeAttribute('tizen-circular-scrollbar');
			}
		}
	});
}());