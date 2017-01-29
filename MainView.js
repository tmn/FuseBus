function gotoHome() {
  router.goto();
}


function gotoFavorites() {
  router.goto();
}

function gotoDepartures(arg) {
  var stopData = arg.data;
  stopData.reqTime = Date.now();

  router.push('departures', stopData);
}


function goBack() {
  router.goBack();
}

module.exports = {
  goBack,
  
  gotoDepartures,
  gotoFavorites,
  gotoHome
};
