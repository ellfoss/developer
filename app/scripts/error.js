var curLetter = -1;
var curNumber = 16;

$(document).ready(function () {
	setTimeout(animate404, 1400);
	setInterval(setNumber, 1000);
});

function animate404() {
	setInterval(animateLetter, 150);
}

function animateLetter() {
	curLetter++;
	if (curLetter > 8) curLetter = 0;
	$('.anim').eq(curLetter).animate({top: -10}, 150, function () {
		$(this).animate({top: 0}, 150);
	});
}

function setNumber() {
	curNumber--;
	$('.number').text(curNumber).css({transform: 'scale(1.2, 1.2)'}).animate({opacity: 1}, 100, function () {
		$(this).css({transform: 'scale(1, 1)'});
	});
	if (curNumber < 1) location.href = '/';
}