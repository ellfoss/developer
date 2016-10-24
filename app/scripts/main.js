$(document).ready(function () {
	$('.menu-item').click(function () {
		var last_menu = $('.menu-item.active').attr('menu');
		var menu = $(this).attr('menu');
		if (menu != last_menu) {
			$('.menu-item').removeClass('active');
			$(this).addClass('active');
			var width = $(window).width();
			if (width > 600) {
				if (menu == 'portfolio') {
					width = $('.sheet[name="main"]').outerWidth();
					$('.main .wrapper').css({left: -width});
				} else {
					$('.main .wrapper').css({left: 0});
				}
			}
		} else {

		}
	});
});
