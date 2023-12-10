ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map1', {
    center: [55.758468, 37.601088],
    // center: [55.75912156895556, 37.61443749999993],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl'],
  },
    {
      // geolocationControlFloat: 'right',
      geolocationControlPosition: { right: 1, top: 352 },
      // geolocationControlMaxWidth: '50px',
      zoomControlPosition: { right: 14, top: 260 },
      zoomControlSize: 'small',
    });

  myMap.behaviors.disable('scrollZoom');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('rulerControl');


  // var zoomControl = new ymaps.control.ZoomControl({
  //   options: {
  //     position: {
  //       right: '50px',
  //     },
  //     zoomStep: '2',
  //   }
  // });
  // myMap.controls.add(zoomControl);
  // myMap.controls.remove('zoomControl');
  // Добавим на карту ползунок масштаба и линейку.
  // myMap.controls.add('zoomControl');
  // myMap.controls.add('rulerControl', {
  //   // Отключим отображение масштабного отрезка рядом с линейкой.
  //   // Подробнее о настройке опций.
  //   scaleLine: false,
  // });
  // Создание геообъекта с типом точка (метка).


  // Размещение геообъекта на карте.

  var myPlacemark = new ymaps.Placemark([55.7621945747721, 37.588138794876], {}, {
    iconLayout: 'default#image',
    iconImageHref: "img/place/map.svg",
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);



  // myMap.controls.remove('routeButtonControl');




}
