/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

// This slide shows the trip counts of each bike station,  and the station's name
var slide1 = {
  slideNumber: 1,
  title: "Trip Counts of Bike Share Stations in Philadelphia",
  filter: function(geojsonFeature) { return true;}
};
// This slide shows the capacity of stations(number of docks)
var slide2 = {
  slideNumber: 2,
  title: "Capacity of Bike Share Stations in Philadelphia",
  filter: function(geojsonFeature) { return true;}
};
// This slide shows bike lanes around stations with the density of bike lanes of each station
var slide3 = {
  slideNumber: 3,
  title: "Bike Lanes Around Bike Share Stations ",
  filter: function(geojsonFeature) { return true;}
};
// This slide shows stations with higher capacity and higher bike lane promixity, which are identified as "Efficient"
var slide4 = {
  slideNumber: 4,
  title: "Efficient Stations",
  filter: function(geojsonFeature) { return true;}
};

// This slide shows stations with lower capacity and lower bike lane promixity,which are identified as "Inefficient"
var slide5 = {
  slideNumber: 5,
  title: "  Inefficient Stations",
  filter: function(geojsonFeature) { return true;}
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3];
