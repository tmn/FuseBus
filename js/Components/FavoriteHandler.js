var Storage = require('FuseJS/Storage')
, Bussholdeplass = require('./Bussholdeplass')
, data = 'favorites';


/* ...
-----------------------------------------------------------------------------*/
var addFavorite
, deleteFavorite
, getFavorites;


/* Functions
-----------------------------------------------------------------------------*/
addFavorite = function(favObj) {
  var favorites = getFavorites();

  if (hasFavorite(favObj.locationId)) {
    return;
  }

  favorites.push(favObj); 
  Storage.writeSync(data, JSON.stringify(favorites));
};

hasFavorite = function (locationId, index) {
  var favorites = getFavorites();

  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].locationId === locationId) {
      return index ? i : true;
    }
  }

  return false;
}

deleteFavorite = function(locationId) {
  var favorites = getFavorites();
  var isFav = hasFavorite(locationId, 1);

  if (isFav !== false && isFav) {
    favorites.splice(isFav, 1);
    Storage.writeSync(data, JSON.stringify(favorites));
  }
};

getFavorites = function () {
  var favorites = Storage.readSync(data);

  if (favorites === null || Storage.readSync(data) === '') {
    // Testdata / initial data
    favorites = [
      new Bussholdeplass('16011333', 'Gløshaugen Nord', 10.406111, 63.418309),
      new Bussholdeplass('16010005', 'Munkegata - M5', 10.393912, 63.432816),
      new Bussholdeplass('16010001', 'Munkegata - M1', 10.393741, 63.432575),
      new Bussholdeplass('16010907', 'Kongens gt - K2', 10.391819, 63.430494)
    ];

    favorites = JSON.stringify(favorites);
    Storage.write(data, favorites);
  }

  return JSON.parse(favorites);
};


/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  addFavorite: addFavorite,
  deleteFavorite: deleteFavorite,
  getFavorites: getFavorites,
  hasFavorite: hasFavorite
};
