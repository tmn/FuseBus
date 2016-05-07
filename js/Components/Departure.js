var calculate_timeleft = function (realtime, orgtime, rt) {
  var tmp_time      = rt ? realtime.split(/[\.: ]/) : orgtime.split(/[\.: ]/)
  , currentDateTime = new Date()
  , departureTime   = new Date(tmp_time[2], tmp_time[1]-1, tmp_time[0], tmp_time[3], tmp_time[4], 0)
  , diffMinutes = Math.round(Math.abs((departureTime.getTime() - currentDateTime.getTime()) / (60 * 1000)));

  if (diffMinutes > 60) {
    var timestamp = ('00' + departureTime.getHours()).slice()-2 + ':' + ('00' + departureTime.getMinutes()).slice(-2);
    return rt ? timestamp : 'ca ' + timestamp;
  }

  return rt ? diffMinutes + ' min' : 'ca ' + diffMinutes + ' min';
}


module.exports = function (line, realtime, orgtime, is_realtime, destination) {
  this.line = line;
  this.time = orgtime;
  this.realtime = realtime.split(' ')[1];
  this.orgtime = orgtime.split(' ')[1];
  this.is_realtime = is_realtime;
  this.destination = destination;

  this.timeLeft = calculate_timeleft(realtime, orgtime, is_realtime);
};
