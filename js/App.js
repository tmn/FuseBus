var Bussholdeplass    = require('./Components/Bussholdeplass')
, Departure           = require('./Components/Departure')
, FavoriteHandler     = require('./Components/FavoriteHandler')
, Stops               = require('./Components/Stops');

var env               = require('FuseJS/Environment')
, Observable          = require('FuseJS/Observable')
, GeoLocation         = require('FuseJS/GeoLocation');

var departures        = Observable()
, favorites           = Observable()
, favorite_departures = Observable()
, filtered_view       = Observable()
, loading_indicator   = Observable(false)
, departures_active   = Observable(false)
, stop_info           = Observable()
, stop_search         = Observable('');

var isFav             = Observable(false);
var isLoading         = Observable(false);
var hasLocation       = Observable(false);

var bottom_panel_active = Observable(function () {
  return loading_indicator.value || departures_active.value;
});

function endLoading() {
  isLoading.value = false;
}

function reloadHandler() {
  isLoading.value = true;
  load_data();
  // setTimeout(endLoading, 3000);
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
  departures_active.value = false;
  setTimeout(function () {
    departures.clear();
  }, 400)
};

var stop_clicked = function (args) {
  loading_indicator.value = true;
  stop_info.value = JSON.parse(JSON.stringify(args.data));
  stop_info.value.displayName = stop_info.value.name; //.length > 30 ? stop_info.value.name.toUpperCase().substring(0, 28) + ' ...' : stop_info.value.name.toUpperCase();
  isFav.value = FavoriteHandler.hasFavorite(stop_info.value.id);
  load_data();
};

var load_data = function () {
  ApiReq.get('rt/' + stop_info.value.locationId).then(function (responseObject) {
    var newDepartures = responseObject['next'].map(function (e) {
      return new Departure(e.l, e.t, e.ts, e.rt, e.d);
    });

    if (isLoading.value) {
      setTimeout(function () {
        departures.replaceAll(newDepartures);
      }, 300);
    } 
    else {
      departures.replaceAll(newDepartures);
    }
      
    setTimeout(function () {
      loading_indicator.value = false;
      departures_active.value = true;
      endLoading();
    }, 350);
  })
  .catch(function (err) {
    console.log('ERROR: ' + err.message);
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
      departures: new Observable()
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
  })
  .catch(function (err) {
    console.log('ERROR: ' + err.message);
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

function reload_favs() {
  // load_fav_data();
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
    console.log('ERROR: ' + err.message);
  });
}


/* Search typing handler
-----------------------------------------------------------------------------*/
stop_search.addSubscriber(function () {
  var search_string = stop_search.value;
  hasLocation.value = search_string.length > 0 && GeoLocation.location !== null;

  if (search_string.length < 3) {
    if (search_string.length === 0) {
      filtered_view.clear();
      update_nearest_stop();
    }

    return;
  }

  filtered_view.replaceAll(Stops.filter(function (e) {
    return e.name.toUpperCase().indexOf(search_string.toUpperCase()) > -1;
  }));
});


/* Init
-----------------------------------------------------------------------------*/
load_fav_data();
favorites.replaceAll(FavoriteHandler.getFavoriteList());


/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  bottom_panel_active: bottom_panel_active,
  departures: departures,
  departures_active: departures_active,
  favorites: favorites,
  favorite_departures: favorite_departures,
  favorite_delete: delete_favorite,
  filtered_view: filtered_view,
  go_back: go_back,
  loading_indicator: loading_indicator,
  reload_favs: reload_favs,
  stop_clicked: stop_clicked,
  stop_info: stop_info,
  stop_search: stop_search,

  isFav: isFav,
  isLoading: isLoading,
  reloadHandler: reloadHandler,

  load_data: load_data,
  add_favorite: add_favorite,
  hasLocation: hasLocation
};
