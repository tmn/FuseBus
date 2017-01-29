var moment = require('libs/moment');
var Observable = require("FuseJS/Observable");

var currentStopId = Observable(); 

function CalculateTimeLeft(time, prefix) {
  var currentTime = moment()
  , departureTime = moment(time, 'DD.MM.YYYY HH:mm') 
  , diffSeconds = parseInt(departureTime.diff(currentTime) / 1000);

  if (diffSeconds > 3600) {
    var timestamp = departureTime.format('HH:mm'); 
    return prefix + timestamp;
  }
  else if (diffSeconds < 60) {
    return prefix + 'Nå';
  }

  return prefix + Math.ceil(diffSeconds / 60) + ' min';
}

function setCurrentStopId(stopId) {
  currentStopId.value = stopId;
}

module.exports = {
  CalculateTimeLeft,
  currentStopId,
  setCurrentStopId
};
