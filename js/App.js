var Api               = require('./Api')
, Bussholdeplass      = require('./Components/Bussholdeplass')
, Departure           = require('./Components/Departure')
, FavoriteHandler     = require('./Components/FavoriteHandler')
, Stops               = require('./Components/Stops');

var env               = require('FuseJS/Environment')
, GeoLocation         = require('FuseJS/GeoLocation')
, Observable          = require('FuseJS/Observable');

var departures        = Observable()
, favorites           = Observable()
, favorites_updated   = Observable()
, favorite_departures = Observable()
, stop_list           = Observable()
, has_location        = Observable(false)
, is_favorite         = Observable(false)
, is_loading          = Observable(false)
, search_string       = Observable('')
, search_reset        = Observable()
, stop_info           = Observable();

var add_favorite
, back_button_handler
, delete_favorite
, end_loading
, get_current_timestamp
, load_departure_data
, load_favorites
, reload_favorite_departures
, reload_handler
, search_reset
, stop_click_handler
, update_nearest_stop;


/* FuncInits
-----------------------------------------------------------------------------*/
add_favorite = function () {
  is_favorite.value = !is_favorite.value;

  if (FavoriteHandler.hasFavorite(stop_info.value.id)) {
    FavoriteHandler.deleteFavorite(stop_info.value.id);
  }
  else {
    FavoriteHandler.addFavorite(stop_info.value);
  }
  
  favorites.replaceAll(FavoriteHandler.getFavoriteList());

  load_favorites();
};

back_button_handler = function () {
  setTimeout(function () {
    departures.clear();
  }, 250)
};

delete_favorite = function (args) {
  favorites.remove(args.data);

  setTimeout(function () {
    FavoriteHandler.deleteFavorite(args.data.id);
    load_favorites();
  }, 1150);
  
};

end_loading = function () {
  is_loading.value = false;
};

get_current_timestamp = function () {
  var current = new Date();
  return ('0' + current.getHours()).slice(-2) + ':' + ('0' + current.getMinutes()).slice(-2);
};

load_departure_data = function () {
  Api.load_departures(stop_info.value.locationId).then(function (response) {
    setTimeout(function () {
      if (response.location_id == stop_info.value.locationId) {
        departures.replaceAll(response.departures);
      }

      end_loading();
    }, 250);
  },
  function (error) {
    console.log('ERROR[2]' + error.message);
  });
};

load_favorites = function () {
  var favorites     = FavoriteHandler.getFavoriteList()
  , new_favorites   = [];

  favorites.forEach(function (stop) {
    var stopDep = {
      name: stop.name,
      direction: stop.direction,
      departures: new Observable(),
      data: stop
    };

    Api.load_departures(stop.locationId).then(function (response) {
      stopDep.departures.replaceAll(response.departures.slice(0, 4));
      favorites_updated.value = 'Sist oppdatert: ' + get_current_timestamp();
    });
      
    new_favorites.push(stopDep);
  });

  favorite_departures.replaceAll(new_favorites);
};

reload_favorite_departures = function () {
  favorite_departures._values.forEach(function (e) {
    Api.load_departures(e.data.locationId).then(function (response) {
      e.departures.replaceAll(response.departures.slice(0, 4));
      favorites_updated.value = 'Sist oppdatert: ' + get_current_timestamp();
    });
  });
};

reload_handler = function () {
  is_loading.value = true;
  load_departure_data();
};

search_reset = function () {
  search_string.value = '';
};

stop_click_handler = function (args) {
  stop_info.value = JSON.parse(JSON.stringify(args.data));
  stop_info.value.displayName = stop_info.value.name;
  is_favorite.value = FavoriteHandler.hasFavorite(stop_info.value.id);
  load_departure_data();
};

update_nearest_stop = function (location) {
  if (!env.mobile) {
    return;
  }

  if (location === undefined) {
    if (GeoLocation.location !== null) {
      has_location.value = true;
      location = GeoLocation.location;
    }
    else {
      has_location.value = false;
      return;
    }
  }

  Api.get('stops/nearest/' + location.latitude + '/' + location.longitude).then(function (responseObject) {
    var convertedStops = responseObject.map(function (e) {
      return new Bussholdeplass(e.busStopId, e.locationId, e.name, e.longitude, e.latitude, e.distance);
    });

    stop_list.replaceAll(convertedStops);
  })
  .catch(function (err) {
    console.log('ERROR[1]: ' + err.message);
  });
};



/* Listeners
-----------------------------------------------------------------------------*/
search_string.addSubscriber(function () {
  has_location.value = search_string.value.length > 0 && GeoLocation.location !== null;

  if (search_string.value.length < 3) {
    if (search_string.value.length === 0) {
      stop_list.clear();
      update_nearest_stop();
    }

    return;
  }

  stop_list.replaceAll(Stops.filter(function (e) {
    return e.name.toUpperCase().indexOf(search_string.value.toUpperCase()) > -1;
  }));
});

if (env.mobile) {
  GeoLocation.onChanged = function (location) {
    update_nearest_stop(location);
  }

  var minimumReportInterval = 5000
  , desiredAccuracyInMeters = 100;

  GeoLocation.startListening(minimumReportInterval, desiredAccuracyInMeters);
}



/* Init
-----------------------------------------------------------------------------*/
load_favorites();
favorites.replaceAll(FavoriteHandler.getFavoriteList());
favorites_updated.value = 'Sist oppdatert: ' + get_current_timestamp();



/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  add_favorite: add_favorite,
  back_button_handler: back_button_handler,
  departures: departures,
  favorites: favorites,
  favorites_updated: favorites_updated,
  favorite_departures: favorite_departures,
  favorite_delete: delete_favorite,
  has_location: has_location,
  is_favorite: is_favorite,
  is_loading: is_loading,
  reload_favorite_departures: reload_favorite_departures,
  reload_handler: reload_handler,
  search_reset: search_reset,
  search_string: search_string,
  stop_click_handler: stop_click_handler,
  stop_info: stop_info,
  stop_list: stop_list
};
