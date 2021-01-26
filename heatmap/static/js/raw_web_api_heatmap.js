// Creating map object
var myMap = L.map("map", {
    center: [40.79, -73.96],
    zoom: 14.44
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
  
  // Store API query variables
  var baseURL = "https://data.cityofnewyork.us/resource/vfnx-vebw.json?";
  
  // Assemble API query URL
  var url = baseURL
  
  // Grab the data with d3
  d3.json(url, function(response) {
  
    console.log(response)
    // // Create a new marker cluster group
    // var markers = L.markerClusterGroup();

    var heatArray = [];

    for (var i = 0; i < response.length; i++) {
      var location = response[i].geocoded_column;
  
      if (location) {
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
    }
  
    // // Loop through data
    // for (var i = 0; i < response.length; i++) {
  
    //   // Set the data location property to a variable
    //   var location = response[i].geocoded_column;
  
    //   // Check for location property
    //   if (location) {
  
    //     // Add a new marker to the cluster group and bind a pop-up
    //     markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
    //       .bindPopup(response[i].descriptor));
    //   }
  
    // }

    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
    // // Add our marker cluster layer to the map
    // myMap.addLayer(markers);
  
  });
  