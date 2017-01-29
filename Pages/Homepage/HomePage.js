var Observable = require("FuseJS/Observable");
var GeoLocation = require("FuseJS/GeoLocation");
var Model = require('Sanntidsappen/Model');


var search_string = Observable('');
var search_results = Observable();
var StopsList = require('Assets/Stops');

var stops = Observable();

search_string.onValueChanged(function (item) {
  if (item.length > 2) {
    search_results.replaceAll(StopsList.filter(function (stop) {
      return stop.name.toUpperCase().indexOf(search_string.value.toUpperCase()) > -1;
    }));
  }
  else {
    return search_results.clear();
  }
});


// GeoLocations
// Gets nearest stops using the devices current location
var continuousLocation = GeoLocation.observe('changed')//.map(JSON.stringify);

var intervalMs = 1000;
var desiredAccuracyInMeters = 20;

GeoLocation.startListening(intervalMs, desiredAccuracyInMeters);

continuousLocation.onValueChanged(function (val) {
  if (val && val.latitude && val.longitude) {
    stops = Model.GetNearestStops(val.latitude, val.longitude).inner();
  } else {
    stops.replaceAll(StopsList.slice(33, 50));
  }
});


module.exports = {
  search_string: search_string,
  search_results: search_results,
  stops: stops
}
