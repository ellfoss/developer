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

	checkPortfolio();
});

function clickMenu(m) {
	var menu = m || $('.menu-item:first-child').attr('menu');
	$('.menu-item,.sheet,.view').removeClass('active');
	$('.menu-item[menu="' + menu + '"]').addClass('active');
	if (menu == 'portfolio') {
		$('.sheet[name="portfolio"]').addClass('active');
		checkPortfolio();
	}
	else {
		$('.sheet[name="main"]').addClass('active');
		$('.view[name="' + menu + '"]').addClass('active');
	}
}

function checkPortfolio() {
	var opacity = $('.sheet[name="portfolio"]').css('opacity');
	if ($('.sheet[name="portfolio"]').hasClass('active')) opacity = '1';
	if (opacity != '0') {
		if (works.length == 0) {
			$.ajax({
				url: '/portfolio/works.php',
				type: 'get',
				dataType: 'json',
				options: {'page': 'mainPage'},
				success: function (answer) {
					var items = 0;
					for (var item in answer) {
						if (items < 3) {
							var work = $('<div class="work minimize"></div>').appendTo($('.portfolio_works'));
							$('<div class="work__header">' + answer[item].name + '</div>').appendTo(work);
							var workLink = $('<a href="' + answer[item].link + '" class="work__link" title="' + answer[item].description + '"><img src="' + answer[item].image + '"></a>').appendTo(work);
							workLink.tooltip({
								position: {
									my: 'center top',
									at: 'center bottom'
								}
							});
							works.push(work);
							items++;
						}
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