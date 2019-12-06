"use strict";

/*global require*/
var BaseMapViewModel = require("terriajs/lib/ViewModels/BaseMapViewModel");
var OpenStreetMapCatalogItem = require("terriajs/lib/Models/OpenStreetMapCatalogItem");

var createGlobalBaseMapOptions = function(terria, bingMapsKey) {
  var basemaps = [];

  var aerial = new OpenStreetMapCatalogItem(terria);
  aerial.name = "Luftfoto";
  aerial.url = "https://th.frb-data.dk/luftfoto2019/{z}/{x}/{y}.png";

  aerial.attribution = "© GeoDanmark";

  aerial.opacity = 1.0;

  basemaps.push(
    new BaseMapViewModel({
      image: require("../../wwwroot/images/orto.png"),
      catalogItem: aerial
    })
  );

  var steets = new OpenStreetMapCatalogItem(terria);
  steets.name = "Baggrundskort";
  steets.url = "https://th.frb-data.dk/baggrundskort/{z}/{x}/{y}.png";
  steets.attribution = "© GeoDanmark";
  steets.opacity = 1.0;

  basemaps.push(
    new BaseMapViewModel({
      image: require("../../wwwroot/images/streets.png"),
      catalogItem: steets
    })
  );

  return basemaps;
};

module.exports = createGlobalBaseMapOptions;
