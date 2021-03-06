// Creating map object
var myMap = L.map("map", {
  center: [40.79, -73.96],
  zoom: 14.44
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the mongo data from the API created.
// Grabbing our data into the function..
d3.json("/raw-web-api", function (mydata) { 
  data = mydata
  console.log(data); 

  // creating an empty array to grab all the coordinates of the squirrels
  var locationArray = [];

  // using a loop and running through the length of the database to grab everything
  for (var i = 0; i < data.length; i++) {
    var location = data[i].geocoded_column;
    var color = data[i].primary_fur_color;
    var chasing = data[i].chasing;

    if (location) {
      locationArray.push([location.coordinates[1], location.coordinates[0]]);
    
    }

  }
  // ploting the heat map
  var heat = L.heatLayer(locationArray, {
    radius: 20,
    blur: 35
  });

  myMap.addLayer(heat);

  //viewing the data in console for futher use

  console.log(locationArray);
 
  
});
