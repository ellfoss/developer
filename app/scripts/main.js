$(document).ready(function () {
	$('.menu-item').click(function () {
		var width = $(window).width();
		if (width > 600) clickMenu($(this).attr('menu'));
		else {
			var place = $(this).attr('menu');
			var destination = $('#' + place).offset().top;
			$('html,body').animate({
				scrollTop: destination
			}, 800);
			return false;
		}
	});

	$(window).resize(function () {
		resize();
	});
});

function clickMenu(menu) {
	var menu = menu || $('.menu-item:first-child').attr('menu');
	var last_menu = $('.menu-item.active').attr('menu');
	$('.menu-item').removeClass('active');
	$(this).addClass('active');
	if (menu != last_menu) {
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
}

function resize() {
	var width = $(window).width();
	if (width <= 600) {
		$('.menu-item').removeClass('active');
	} else {
		$('.menu-item:first-child').addClass('active');
		clickMenu();
	}
}