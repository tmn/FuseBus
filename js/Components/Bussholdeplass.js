var get_direction
, get_direction_code;


/* Inits
-----------------------------------------------------------------------------*/
get_direction = function (locationId) {
  if (locationId.length >=5) {
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

get_direction_code = function (locationId) {
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
module.exports = function (locationId, name, lon, lat, distance) {
  this.locationId = locationId;
  this.name = name;
  this.lon = lon;
  this.lat = lat;
  this.direction = get_direction(locationId);

  if (distance) {
    this.distance = parseInt(distance) + ' m';
  }
}
