var Observable = require("FuseJS/Observable");
var Sanntidsappen = require('Sanntidsappen/Sanntidsappen');

function DelayedObservable(getter) {
  var obs = Observable();
  getter(obs);

  return obs;
}

function GetDepartures(stopId) {
  return DelayedObservable(function (observable) {
    Sanntidsappen.fetchDepartures(stopId).then(function (res) {
      observable.replaceAll(res);
    });
  });
}

function GetNearestStops(latitude, longitude) {
  return DelayedObservable(function (observable) {
    Sanntidsappen.fetchNearestStops(latitude, longitude).then(function (res) {
      observable.replaceAll(res);
    })
  });
}

module.exports = {
  GetDepartures,
  GetNearestStops
};
