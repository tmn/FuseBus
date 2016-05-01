var Departure = require('./Components/Departure');

var url = 'http://bybussen.api.tmn.io/';

var get = function (path, callback) {
  return fetch(url + path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(function (response) {
    return response.json();
  });
};

/*
 * Returns (new_departures, location_id)
 */
var load_departures = function (location_id) {
  var promise = new Promise(function (resolve, reject) {
    get('rt/' + location_id).then(function (responseObject) {
      var departures = responseObject['next'].map(function (e) {
        return new Departure(e.l, e.t, e.ts, e.rt, e.d);
      });

      resolve({
        departures: departures,
        location_id: responseObject.name.match(/(\d+){4}/g)[0]
      });
    }).catch(function (e) {
      reject({ message: 'Something went wrong' });
    });
  });

  return promise;
};


module.exports = {
  get: get,
  load_departures: load_departures
};
