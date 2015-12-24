var Storage = require('FuseJS/Storage');

var filename = 'favorites.json';

function saveFavorite(stop) {
  console.log(getFavorites);
}

function getFavorites() {
  Storage.read(filename).then(function (content) {
    return content;
  }, function (error) {
    if (error === 'File does not exist.') {
      console.log('CREATING FILE');
      Storage.write(filename, JSON.stringify([]));
    }
    else {
      console.log('error: ' + error);
    }
  })

}

function isFavorite(stop) {
  var favorites = getFavorites();

  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].id === stop.id) {
      return true;
    }
  }
}

module.exports = {
  getFavorites: getFavorites,
  isFavorite: isFavorite,
  saveFavorite: saveFavorite
};
