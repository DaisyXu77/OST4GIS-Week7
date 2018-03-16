/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
// Project: Explore the efficiency of bike share stations in Philadelphia
// Efficient bike share stations should:
//  1) have more trip counts in total
//  2) have more available docks
//  3) built around bike lanes

// Data:
//  a. bike stations of Philadelphia(with number of docks, name, and location)
//  b. bike lanes of Philadelphia(location)

// Functions to be finished:


// Filter functions
var filterByDocks = function(data){
  if ( data.numDock >= 20){
    console.log("Capacity:High");
    return true;}
};

var filterByLanes = function(data){
  if ( data.LaneDens >= 2.5){
    console.log("Proximity:High");
    return true;}
};

// Select near bike lanes function
var selectNear = function(data){};

// Switch slides by clicking on button
var switchRight = function(){
};
var switchLeft= function(){
};

// Add Markers:
$(document).ready(function(){
  $("button").click(function(){
    var url=$('#text-input1').val();
    var lon=$('#text-input2').val();
    var lat=$('#text-input3').val();
    var downloadData = $.ajax(url);
    var parseData = function(d){
      return JSON.parse(d);
    };
    var makeMarkers = function(array){
      var markers = [];
      _.each(array,function(obj){
        markers.push(L.marker([obj[lat],obj[lon]]));
      });
      return markers;
    };
    var plotMarkers = function(arr) {
      _.each(arr,function(marker){marker.addTo(map);});
    };
    downloadData.done(function(data){
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
    });
  });
});
