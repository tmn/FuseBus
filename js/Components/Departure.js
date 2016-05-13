var moment = require('../libs/moment.min.js');

var calculate_timeleft = function (realtime, orgtime, rt) {
  var currentTime = moment()
  , departureTime = moment(rt ? realtime : orgtime, 'DD.MM.YYYY HH:mm') 
  , diffSeconds = parseInt(departureTime.diff(currentTime)/1000);

  if (diffSeconds > 3600) {
    var timestamp = departureTime.format('HH:mm'); 
    return rt ? timestamp : 'ca ' + timestamp;
  }
  else if (diffSeconds < 60) {
    return rt ? 'Nå' : 'ca ' + 'Nå';
  }

  return rt ? Math.ceil((diffSeconds / 60)) + ' min' : 'ca ' + Math.ceil(diffSeconds / 60) + ' min';
}


module.exports = function (line, realtime, orgtime, is_realtime, destination) {
  this.line = line;
  this.time = orgtime;
  this.realtime = realtime.split(' ')[1];
  this.orgtime = orgtime.split(' ')[1];
  this.is_realtime = is_realtime;
  this.destination = destination;
  this.timeDiff = realtime !== orgtime;

  this.timeLeft = calculate_timeleft(realtime, orgtime, is_realtime);
};
