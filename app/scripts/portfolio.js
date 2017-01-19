var works = [];

$(document).ready(function () {
	$.ajax({
		url: '/portfolio/works.php',
		type: 'post',
		dataType: 'json',
		success: function (answer) {
			for (var item in answer) {
				var work = $('<div class="work minimize"></div>').appendTo($('.works'));
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
			setInterval(function () {
				worker();
			}, 200);
		},
		error: function (error) {

		}
	});
});

function worker() {
	for (var work in works) {
		if (works[work].hasClass('minimize')) {
			works[work].removeClass('minimize');
			break;
		}
	}
}