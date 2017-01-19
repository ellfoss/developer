var works = [];

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
	if (menu == 'portfolio') {
		$('.sheet[name="portfolio"]').addClass('active');
		if (works.length == 0) {
			$.ajax({
				url: '/portfolio/works.php',
				type: 'post',
				dataType: 'json',
				options: {type: 'mainPage'},
				success: function (answer) {
					for (var item in answer) {
						var work = $('<div class="work minimize"></div>').appendTo($('.portfolio_works'));
						var workHeader = $('<div class="work__header">' + answer[item].name + '</div>').appendTo(work);
						var workLink = $('<a href="' + answer[item].link + '" class="work__link" title="' + answer[item].description + '"><img src="' + answer[item].image + '"></a>').appendTo(work);
						workLink.tooltip({
							position: {
								my: 'center top',
								at: 'center bottom'
							}
						});
						works.push(work);
					}
					setTimeout(function () {
						setInterval(function () {
							worker();
						}, 200);
					}, 300);
				},
				error: function (error) {

				}
			});
		}
	}
	else {
		$('.sheet[name="main"]').addClass('active');
		$('.view[name="' + menu + '"]').addClass('active');
	}
}

function worker() {
	for (var work in works) {
		if (works[work].hasClass('minimize')) {
			works[work].removeClass('minimize');
			break;
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