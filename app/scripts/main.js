$(document).ready(function () {
	$('.menu-item').click(function () {
		var last_menu = $('.menu-item.active').attr('menu');
		var menu = $(this).attr('menu');
		if (menu != last_menu) {
			$('.menu-item').removeClass('active');
			$(this).addClass('active');
			var width = $(window).width();
			if (width > 600) {
				var main_wrapper = $('.main .wrapper');
				width = main_wrapper.outerWidth();
				if (menu == 'portfolio') main_wrapper.css({left: -width});
				else {
					main_wrapper.css({left: 0});
					var text_wrapper = $('.sheet-text-wrapper');
					width = text_wrapper.outerWidth();
					if (menu == 'contacts') text_wrapper.css({left: -width});
					else text_wrapper.css({left: 0});
				}
			}
		} else {

		}
	});
});
