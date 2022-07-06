let center = [47.229660, 39.756713];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 20
	});

    let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177361.png?token=exp=1655683167~hmac=7922a005cb3bca1c08a38cf8b0d43041',
		iconImageSize: [40, 40],
		iconImageOffset: [-10, -10]
	});
    
    let placemark1 = new ymaps.Placemark(center, {
		balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Улица Советская 29/1</div>
				<div class="balloon__contacts">
					<a href="tel:+7999999999">+7(905)42-88-522</a>
				</div>
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-10, -10]
	});
  
	map.controls.remove('geolocationControl'); 
 
  map.controls.remove('typeSelector'); 
  map.controls.remove('fullscreenControl'); 
  
  map.controls.remove('rulerControl'); 
  map.geoObjects.add(placemark);

  map.geoObjects.add(placemark1);
  
}



ymaps.ready(init);