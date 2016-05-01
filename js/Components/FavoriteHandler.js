var Storage = require('FuseJS/Storage')
, Bussholdeplass = require('./Bussholdeplass')
, data = 'favorites';


/* ...
-----------------------------------------------------------------------------*/
var addFavorite
, deleteFavorite
, getFavoriteList
, getFavorites;



/* Functions
-----------------------------------------------------------------------------*/
addFavorite = function(favObj) {
  var favorite = getFavorites();

  if (favorite[favObj.id]) {
    return;
  }

  favorite[favObj.id] = favObj;
  Storage.writeSync(data, JSON.stringify(favorite));
};

hasFavorite = function (id) {
  var favorite = getFavorites();
  return favorite[id] ? true : false;
}

deleteFavorite = function(id) {
  var favorite = getFavorites();

  if (favorite[id]) {
    delete favorite[id];
    Storage.writeSync(data, JSON.stringify(favorite));
  }
};

getFavorites = function () {
  var favorites = Storage.readSync(data);

  if (favorites === null || Storage.readSync(data) === '') {
    favorites = {
      100268: new Bussholdeplass(100268, '16011333', 'Gløshaugen Nord', 10.406111, 63.418309),
      100616: new Bussholdeplass(100616, '16010005', 'Munkegata - M5', 10.393912, 63.432816),
      100620: new Bussholdeplass(100620, '16010001', 'Munkegata - M1', 10.393741, 63.432575),
      101884: new Bussholdeplass(101884, '16010907', 'Kongens gt - K2', 10.391819, 63.430494)
    };

    favorites = JSON.stringify(favorites);
    Storage.write(data, favorites);
  }

  return JSON.parse(favorites);
};

getFavoriteList = function () {
  var favorites = getFavorites();

  var list = [];

  for (var f in favorites) {
    list.push(favorites[f]);
  }

  return list;
};


/* Exports
-----------------------------------------------------------------------------*/
module.exports = {
  addFavorite: addFavorite,
  deleteFavorite: deleteFavorite,
  getFavoriteList: getFavoriteList,
  getFavorites: getFavorites,
  hasFavorite: hasFavorite
};
