var Observable = require("FuseJS/Observable");
var GeoLocation = require("FuseJS/GeoLocation");
var Model = require('Sanntidsappen/Model');
var StopsList = require('Assets/Stops');

var search_string = Observable('');
var search_results = Observable();
var distancePresent = Observable();
var stops = Observable();

search_string.onValueChanged(function (item) {
  distancePresent.value = false;
  if (item.length > 2) {
    search_results.replaceAll(StopsList.filter(function (stop) {
      return stop.name.toUpperCase().indexOf(search_string.value.toUpperCase()) > -1;
    }));
    stops.replaceAll(search_results)
  }
  else {
    search_results.clear();
  }
});

// GeoLocations
// Gets nearest stops using the devices current location
var continuousLocation = GeoLocation.observe('changed')

var intervalMs = 1000;
var desiredAccuracyInMeters = 20;

GeoLocation.startListening(intervalMs, desiredAccuracyInMeters);

continuousLocation.onValueChanged(function (val) {
  if (search_results.length === 0) {
    if (val && val.latitude && val.longitude) {
      stops = Model.GetNearestStops(val.latitude, val.longitude).inner();
      distancePresent.value = true;
    } else {
      stops.replaceAll(StopsList.slice(33, 50));
      distancePresent.value = false;
    }
  }
});

module.exports = {
  distancePresent,
  search_string: search_string,
  search_results: search_results,
  stops: stops
}
