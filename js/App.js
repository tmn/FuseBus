var Bussholdeplass    = require('Bussholdeplass')
, Departure           = require('Departure')
, Observable          = require('FuseJS/Observable')
, GeoLocation         = require('FuseJS/GeoLocation')
, Stops               = require('Stops');

var departures        = Observable()
, favorites           = Observable()
, filtered_view       = Observable()
, loading_indicator   = Observable(false)
, departures_active   = Observable(false)
, nearest_stops       = Observable()
, stop_info           = Observable()
, stop_search         = Observable('');


/* Mock data
-----------------------------------------------------------------------------*/
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

  var url = 'http://bybussen.api.tmn.io/rt/' + args.data.locationId;

  fetch(url, {
    method: 'GET',
    headers: { "Content-type": "application/json" }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (responseObject) {
    var newDepartures = responseObject['next'].map(function (e) {
      return new Departure(e.l, e.t, e.ts, e.rt, e.d);
    });

    departures.replaceAll(newDepartures);

    setTimeout(function () {
      loading_indicator.value = false;
      departures_active.value = true;
    }, 300);
  })
  .catch(function (err) {
    console.log('ERROR: ' + err.message);
  });
};


/* Geolocation + nearest stops
-----------------------------------------------------------------------------*/
GeoLocation.onChanged = function (location) {
  console.log('CHANGED');
  updateNearestStops(location);  
}

if (GeoLocation.location !== null) {
  updateNearestStops(GeoLocation.location);
}

updateNearestStops();

var minimumReportInterval = 1000, desiredAccuracyInMeters = 10;
GeoLocation.startListening(minimumReportInterval, desiredAccuracyInMeters);

function stop() {
   GeoLocation.stopListening();
}

function updateNearestStops(location) {
  if (location === undefined) {
    if (GeoLocation.location !== null) {
      location = GeoLocation.location;
    }
    else {
      return;
    }
  }

  fetch('http://bybussen.api.tmn.io/stops/nearest/' + location.latitude + '/' + location.longitude)
  .then(function (response) {
    console.log('asdf');
    return response.json();
  })
  .then(function (responseObject) {
    var convertedStops = responseObject.map(function (e) {
      return new Bussholdeplass(e.busStopId, e.locationId, e.name, e.longitude, e.latitude, e.distance);
    });

    filtered_view.replaceAll(convertedStops);
  })
  .catch(function (err) {
    console.log('ERROR: ' + err.message);
  });
}


/* Data fetching
-----------------------------------------------------------------------------*/
stop_search.addSubscriber(function () {
  if (stop_search.value.length < 3) {
    if (stop_search.value.length === 0) {
      filtered_view.clear();
      updateNearestStops();
    }

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
