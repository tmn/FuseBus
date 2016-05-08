var moment = require('../libs/moment.min.js');

var calculate_timeleft = function (realtime, orgtime, rt) {
  var currentTime = moment()
  , departureTime = moment(rt ? realtime : orgtime, 'DD.MM.YYYY hh:mm') 
  , diffSeconds = parseInt(departureTime.diff(currentTime)/1000);

  if (diffSeconds > 3600) {
    var timestamp = departureTime.format('hh:mm'); // ('00' + departureTime.getHours()).slice(-2) + ':' + ('00' + departureTime.getMinutes()).slice(-2);
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
  console.log('orgtime: ' + orgtime);
  this.timeLeft = calculate_timeleft(realtime, orgtime, is_realtime);
};
