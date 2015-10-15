var Observable = require('FuseJS/Observable');

var get_direction = function (locationId) {
  if (locationId.length == 8) {
    switch (parseInt(get_direction_code(locationId))) {
      case 1:  return 'til midtbyen';
      case 0:  return 'fra midtbyen';
      case 20: return 'mot Stjørdal';
      case 83: return 'mot Trondheim';
      case 6:  return 'mot Klæbu';
      case 7:  return 'mot Klæbu';
      case 40: return 'vestover';
      case 87: return 'østover';
      default: return '...';
    }
  }
};

var get_direction_code = function (locationId) {
  var directionCode = parseInt(locationId.substring(4, 5));
  if (directionCode === 1 || directionCode === 0 || directionCode === 6 || directionCode === 7) {
    return directionCode;
  }

  directionCode = parseInt(locationId.substring(4, 6));
  if (directionCode === 20 || directionCode === 83 || directionCode === 40 || directionCode === 87) {
    return directionCode;
  }
};


/* ...
-----------------------------------------------------------------------------*/
module.exports = function (id, locationId, name, lon, lat) {
  this.id = id;
  this.locationId = locationId;
  this.name = name;
  this.lon = lon;
  this.lat = lat;
  this.direction = get_direction(locationId);
  this.active = Observable(false);
}
