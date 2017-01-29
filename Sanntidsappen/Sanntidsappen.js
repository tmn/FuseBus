var Departures = require('Sanntidsappen/Departures');
var baseUrl = 'http://bybussen.api.tmn.io/';

function Sanntidsappen (path, args, method, body) {
  var url = baseUrl + path;
  var requestObj = { method: 'GET', headers: { 'Content-Type': 'application/json' }};

  return fetch(url, requestObj).then(function (res) {
    if (res.status === 200) {
      return res.json();
    }

    return null
  }).catch(function (err) {
    console.log('Failed to fetch(' + url + '): ' + msg);
  });
}

// ----------------------------------------------------------------------------

function CreateDepartures(departureList) {
  var departures = [];

  departureList.forEach(function (departure) {
    departures.push(CreateDeparture(departure));
  });

  return departures;
}

function CreateDeparture(departure) {
  return {
    line: departure.l,
    time: departure.t.substring(11),
    aimedTime: departure.ts.substring(11),
    realTime: departure.rt,
    destination: departure.d,
    timeDiff: departure.t !== departure.ts,
    timeLeft:  departure.rt 
    ? Departures.CalculateTimeLeft(departure.t, '')
    : Departures.CalculateTimeLeft(departure.ts, 'ca ') 
  };
}

function CreateStops(stopList) {
  var stops = [];

  stopList.forEach(function (stop) {
    stops.push(CreateStop(stop));
  });

  return stops;  
}

function CreateStop(stop) {
  return {
    name: stop.name,
    id: stop.locationId,
    distance: stop.distance,
    d: stop.d
  };
}

// ----------------------------------------------------------------------------

function fetchDepartures(stopId) {
  return Sanntidsappen('rt/' + stopId, {}).then(function (departures) {
    return CreateDepartures(departures.next);
  });
}

function fetchNearestStops(latitude, longitude) {
  return Sanntidsappen('stops/nearest/' + latitude + '/' + longitude).then(function (stops) {
    return CreateStops(stops);
  });
}

// ----------------------------------------------------------------------------

module.exports = {
  fetchDepartures,
  fetchNearestStops
};
