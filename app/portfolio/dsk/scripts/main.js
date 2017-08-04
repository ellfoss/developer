$(document).ready(function(){
	$('.top-info .links').click(function(){
		$('.ext-links').toggleClass('hide');
		$('.ext-search').addClass('hide');
		$('.ext-menu').addClass('hide');
	});
	$('.top-info .search').click(function(){
		$('.ext-links').addClass('hide');
		$('.ext-search').toggleClass('hide');
		$('.ext-menu').addClass('hide');
	});
	$('.top-info .menu').click(function(){
		$('.ext-links').addClass('hide');
		$('.ext-search').addClass('hide');
		$('.ext-menu').toggleClass('hide');
	});

	ymaps.ready(mapInit);
	function mapInit(){
		var myMap = new ymaps.Map('fmap',{
			center: [59.9482,30.3441],
			zoom: 16
		});
		myMap.controls.add(
			new ymaps.control.SmallZoomControl()
		);
		var myPlacemark = new ymaps.Placemark(
			[59.9482,30.3441],{
				hintContent: 'ДСК Защита прав дольщиков. СПб, Шпалерная улица, 7'
			}
		);
		myMap.geoObjects.add(myPlacemark);
	}
});

