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

function clickMenu(m) {
	var menu = m || $('.menu-item:first-child').attr('menu');
	$('.menu-item,.sheet,.view').removeClass('active');
	$('.menu-item[menu="' + menu + '"]').addClass('active');
	if (menu == 'portfolio') $('.sheet[name="portfolio"]').addClass('active');
	else {
		$('.sheet[name="main"]').addClass('active');
		$('.view[name="' + menu + '"]').addClass('active');
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