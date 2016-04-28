var Bussholdeplass    = require('./Components/Bussholdeplass')
, Departure           = require('./Components/Departure')
, FavoriteHandler     = require('./Components/FavoriteHandler')
, Stops               = require('./Components/Stops');

var env               = require('FuseJS/Environment')
, Observable          = require('FuseJS/Observable')
, GeoLocation         = require('FuseJS/GeoLocation');

var departures        = Observable()
, favorites           = Observable()
, favorites_updated   = Observable('Sist oppdatert: ' + getCurrentTime())
, favorite_departures = Observable()
, filtered_view       = Observable()
, hasLocation         = Observable(false)
, isFav               = Observable(false)
, isLoading           = Observable(false)
, search_string       = Observable('')
, search_reset        = Observable()
, stop_info           = Observable();


function endLoading() {
  isLoading.value = false;
}

function reloadHandler() {
  isLoading.value = true;
  load_data();
}

function getCurrentTime() {
  var current = new Date();
  return ('0' + current.getHours()).slice(-2) + ':' + ('0' + current.getMinutes()).slice(-2);
}

/* Func
-----------------------------------------------------------------------------*/
var ApiReq = {
  url: 'http://bybussen.api.tmn.io/',
  get: function (path, callback) {
    return fetch(ApiReq.url + path, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    })
  }
};

var go_back = function () {
  setTimeout(function () {
    departures.clear();
  }, 250)
};

var stop_clicked = function (args) {
  stop_info.value = JSON.parse(JSON.stringify(args.data));
  stop_info.value.displayName = stop_info.value.name; //.length > 30 ? stop_info.value.name.toUpperCase().substring(0, 28) + ' ...' : stop_info.value.name.toUpperCase();
  isFav.value = FavoriteHandler.hasFavorite(stop_info.value.id);
  load_data();
};

var load_data = function () {
  ApiReq.get('rt/' + stop_info.value.locationId).then(function (responseObject) {
    responseObject.locationId = responseObject.name.match(/(\d+){4}/g)[0];
    var newDeps = responseObject['next'].map(function (e) {
      return new Departure(e.l, e.t, e.ts, e.rt, e.d);
    });

    if (responseObject.locationId == stop_info.value.locationId) {
      setTimeout(function () {
        departures.replaceAll(newDeps);
      }, 250);
    }

    setTimeout(function () {
      endLoading();
    }, 250);
  })
  .catch(function (e) {
    console.log('ERROR[2]' + e.message);
  });
};


/* Load favorites
-----------------------------------------------------------------------------*/
function load_fav_data() {
  var favs = FavoriteHandler.getFavoriteList();
  var newFavs = [];

  favs.forEach(function (stop) {
    var stopDep = {
      name: stop.name,
      direction: stop.direction,
      departures: new Observable(),
      data: stop
    };

    load_fav_departures(stopDep.departures, stop.locationId)
      
    newFavs.push(stopDep);
  });

  favorite_departures.replaceAll(newFavs);
}

function load_fav_departures(arr, id) {
  ApiReq.get('rt/' + id).then(function (responseObject) {
    var departures = responseObject.next.slice(0, 4).map(function (d) {
      return new Departure(d.l, d.t, d.ts, d.rt, d.d);
    });

    arr.replaceAll(departures);
    favorites_updated.value = 'Sist oppdatert: ' + getCurrentTime();
  })
  .catch(function (err) {
    console.log('ERROR[0]: ' + err.message);
  });
}

function reload_favs() {
  favorite_departures._values.forEach(function (e) {
    load_fav_departures(e.departures, e.data.locationId);
  });
}

function delete_favorite(args) {
  favorites.remove(args.data);

  setTimeout(function () {
    FavoriteHandler.deleteFavorite(args.data.id);
    load_fav_data();
  }, 1150);
  
}

function add_favorite() {
  if (FavoriteHandler.hasFavorite(stop_info.value.id)) {
    FavoriteHandler.deleteFavorite(stop_info.value.id);
  }
  else {
    FavoriteHandler.addFavorite(stop_info.value);
  }
  
  favorites.replaceAll(FavoriteHandler.getFavoriteList());
  isFav.value = FavoriteHandler.hasFavorite(stop_info.value.id);

  load_fav_data();
}




/* Geolocation + nearest stops
-----------------------------------------------------------------------------*/
function update_nearest_stop(location) {
  if (!env.mobile) {
    return;
  }

  if (location === undefined) {
    if (GeoLocation.location !== null) {
      hasLocation.value = true;
      location = GeoLocation.location;
    }
    else {
      hasLocation.value = false;
      return;
    }
  }

  ApiReq.get('stops/nearest/' + location.latitude + '/' + location.longitude).then(function (responseObject) {
    var convertedStops = responseObject.map(function (e) {
      return new Bussholdeplass(e.busStopId, e.locationId, e.name, e.longitude, e.latitude, e.distance);
    });

    filtered_view.replaceAll(convertedStops);
  })
  .catch(function (err) {
    console.log('ERROR[1]: ' + err.message);
  });
}


/* Search typing handler
-----------------------------------------------------------------------------*/
search_string.addSubscriber(function () {
  hasLocation.value = search_string.value.length > 0 && GeoLocation.location !== null;

  if (search_string.value.length < 3) {
    if (search_string.value.length === 0) {
      filtered_view.clear();
      update_nearest_stop();
    }

    return;
  }

  filtered_view.replaceAll(Stops.filter(function (e) {
    return e.name.toUpperCase().indexOf(search_string.value.toUpperCase()) > -1;
  }));
});

search_reset = function () {
  search_string.value = '';
};


/* Init
-----------------------------------------------------------------------------*/
load_fav_data();
favorites.replaceAll(FavoriteHandler.getFavoriteList());


/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  departures: departures,
  favorites: favorites,
  favorites_updated: favorites_updated,
  favorite_departures: favorite_departures,
  favorite_delete: delete_favorite,
  filtered_view: filtered_view,
  go_back: go_back,
  reload_favs: reload_favs,
  search_string: search_string,
  search_reset: search_reset,
  stop_clicked: stop_clicked,
  stop_info: stop_info,

  isFav: isFav,
  isLoading: isLoading,
  reloadHandler: reloadHandler,

  load_data: load_data,
  add_favorite: add_favorite,
  hasLocation: hasLocation
};
