// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json("/raw-web-api", function (mydata) { 
  data = mydata
  console.log(data); 

  var locationArray = [];
  var colorArray = [];
  var ChasingArray = [];
  
  
  // Adding heat array
  var heatArray = [];

  for (var i = 0; i < data.length; i++) {
    var location = data[i].geocoded_column;
    var color = data[i].primary_fur_color;
    var chasing = data[i].chasing;
    // if (chasing == True){
    //   behaviourArray.push([location.coordinates[1], location.coordinates[0]]);
    // }

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
    // if (color) {
    //   colorArray.push(color);
    // }

  }
  // Plotly.newPlot('map', data);
});
