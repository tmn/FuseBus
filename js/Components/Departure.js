var calculate_timeleft = function (realtime, orgtime, rt) {
  var tmp_time      = rt ? realtime.split(/[\.: ]/) : orgtime.split(/[\.: ]/)
  , currentDateTime = new Date()
  , departureTime   = new Date(tmp_time[2], tmp_time[1]-1, tmp_time[0], tmp_time[3], tmp_time[4], 0)
  , diffSeconds = Math.round(Math.abs((departureTime.getTime() - currentDateTime.getTime()) / (1000)));

  if (diffSeconds > 3600) {
    var timestamp = ('00' + departureTime.getHours()).slice(-2) + ':' + ('00' + departureTime.getMinutes()).slice(-2);
    return rt ? timestamp : 'ca ' + timestamp;
  }
  else if (diffSeconds < 60) {
    return rt ? 'Nå' : 'ca ' + 'Nå';
  }

  return rt ? Math.ceil((diffSeconds/60)) + ' min' : 'ca ' + Math.ceil((diffSeconds/60)) + ' min';
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
