var Storage = require('FuseJS/Storage');

// Storage name
var data = 'favorites';


function addFavorite() {

}

function deleteFavorite() {

}

function getFavorites() {
  var favorites = Storage.readSync(data);

  if (favorites === null || favorites === '') {
    // init
    favorites = {
      favs: []
    };

    var favString = JSON.stringify(favorites);
    Storage.write(data, favString);
  }
}
