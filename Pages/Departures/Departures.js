var Observable = require("FuseJS/Observable");
var Departures = require('Sanntidsappen/Departures');
var Model = require('Sanntidsappen/Model');

// ----------------------------------------------------------------------------

var error = Observable();
var departures = Departures.currentStopId
                           .where(function (x) { return x.length > 0 })
                           .map(Model.GetDepartures)
                           .inner();

// ----------------------------------------------------------------------------

var direction = this.Parameter.map(function (s) { return s.d; })
, stopId = this.Parameter.map(function (s) { return s.id; })
, stopName = this.Parameter.map(function (s) { return s.name; });


// ----------------------------------------------------------------------------

Departures.currentStopId.onValueChanged(function (x) {
  departures.clear();
});

stopId.onValueChanged(function (id) {
  Departures.setCurrentStopId(id);
});


// ----------------------------------------------------------------------------

function cleanupAfterInactive() {
  Departures.setCurrentStopId('');
  stopName.value = '...';
  direction.value = '...';
}

// ----------------------------------------------------------------------------

module.exports = {
  cleanupAfterInactive,
  departures,
  direction,
  error,
  id: stopId,
  name: stopName
};
