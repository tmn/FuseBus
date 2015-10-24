var calculate_timeleft = function (time, rt) {
  var tmp_time      = time.split(/[\.: ]/)
  , currentDateTime = new Date()
  , departureTime   = new Date(tmp_time[2], tmp_time[1]-1, tmp_time[0], tmp_time[3], tmp_time[4], 0);

  if (currentDateTime.getFullYear() == departureTime.getFullYear()) {

    var departureTimeMinutes = departureTime.getHours()*60 + departureTime.getMinutes()
    , currentDateTimeMinutes = currentDateTime.getHours()*60 + currentDateTime.getMinutes()
    , interval               = departureTimeMinutes - currentDateTimeMinutes;

    if (currentDateTime.getMonth() == departureTime.getMonth() && currentDateTime.getDate() == departureTime.getDate()) {
      if (interval < 60) {
        if (interval < 1) {
          return rt ? 'Nå' : 'ca nå';
        }
        else {
          return rt ? interval + ' min' : 'ca ' + interval + ' min';
        }
      }
    }

    return departureTime.getHours() + ':' +(departureTime.getMinutes()< 10 ? '0' : '' ) + departureTime.getMinutes();
  }

  return '...';
};

module.exports = function (line, time, realtime, is_realtime, destination) {
  this.line = line;
  this.time = time;
  this.realtime = realtime;
  this.is_realtime = is_realtime;
  this.destination = destination;
  this.org_time = time.split(' ')[1];

  this.timeLeft = calculate_timeleft(time, realtime, is_realtime);
};
