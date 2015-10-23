var DEV = true;

var Bussholdeplass    = require('Bussholdeplass')
, Departure           = require('Departure')
, Observable          = require('FuseJS/Observable')
, Stops               = require('Stops');

var departures        = Observable()
, favorites           = Observable()
, filtered_view       = Observable()
, loading_indicator   = Observable(false)
, departures_active   = Observable(false)
, stop_info           = Observable()
, stop_search         = Observable('');


/* Mock data
-----------------------------------------------------------------------------*/
if (DEV) {
  departures.add(new Departure('4', '10.10.2015 21:38', '10.10.2015 21:33', 1, 'Munkegata M5'));
  departures.add(new Departure('6', '10.10.2015 21:58', '10.10.2015 21:58', 0, 'Værestrøa'));
  departures.add(new Departure('38', '10.10.2015 22:01', '10.10.2015 21:44', 1, 'Stjørdal st.'));
  departures.add(new Departure('46', '10.10.2015 22:02', '10.10.2015 22:02', 0, 'Pirbadet'));
  departures.add(new Departure('4', '10.10.2015 22:03', '10.10.2015 22:03', 0, 'Lade'));
  departures.add(new Departure('6', '10.10.2015 22:28', '10.10.2015 22:28', 0, 'Værestrøa'));
  departures.add(new Departure('4', '10.10.2015 21:38', '10.10.2015 21:33', 1, 'Munkegata M5'));
  departures.add(new Departure('6', '10.10.2015 21:58', '10.10.2015 21:58', 0, 'Værestrøa'));
  departures.add(new Departure('38', '10.10.2015 22:01', '10.10.2015 21:44', 1, 'Stjørdal st.'));
  departures.add(new Departure('46', '10.10.2015 22:02', '10.10.2015 22:02', 0, 'Pirbadet'));
  departures.add(new Departure('4', '10.10.2015 22:03', '10.10.2015 22:03', 0, 'Lade'));
  departures.add(new Departure('6', '10.10.2015 22:28', '10.10.2015 22:28', 0, 'Værestrøa'));

}
favorites.add(new Bussholdeplass('100268', '16011333', 'Gløshaugen Nord', 10.406111, 63.418309));
favorites.add(new Bussholdeplass('100295', '16010333', 'Gløshaugen Nord', 10.405967, 63.418184));
favorites.add(new Bussholdeplass('102714', '16011265', 'Gløshaugen Syd', 10.406111, 63.418309));
favorites.add(new Bussholdeplass('100268', '16011333', 'Gløshaugen Nord', 10.406111, 63.418309));

/* Func
-----------------------------------------------------------------------------*/
var go_back = function () {
  departures_active.value = false;
  departures.clear();
};

var stop_clicked = function (args) {
  loading_indicator.value = true;

  stop_info.value = args.data;
  stop_info.value.name = stop_info.value.name.toUpperCase();

  fetch('http://bybussen.api.tmn.io/rt/' + args.data.locationId)
  .then(function (response) {
    response.json().then(function (responseObject) {
      var newDepartures = responseObject['next'].map(function (e) {
        return new Departure(e.l, e.t, e.ts, e.rt, e.d);
      });

      departures.replaceAll(newDepartures);

      setTimeout(function () {
        loading_indicator.value = false;
        departures_active.value = true;
      }, 300);
    });
  });
};


/* Data fetching
-----------------------------------------------------------------------------*/
stop_search.addSubscriber(function () {  
  if (stop_search.value.length < 3) {

    return;
  }

  var search_string = stop_search.value.toUpperCase();

  filtered_view.replaceAll(Stops.filter(function (e) {
    return e.name.toUpperCase().indexOf(search_string) > -1;
  }));
});


/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  departures: departures,
  departures_active: departures_active,
  favorites: favorites,
  filtered_view: filtered_view,
  go_back: go_back,
  loading_indicator: loading_indicator,
  stop_clicked: stop_clicked,
  stop_info: stop_info,
  stop_search: stop_search
};
