

function createMap(squirrels) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 20,
      id: "light-v10",
      accessToken: API_KEY
    });
  
    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
      "Light Map": lightmap
    };
  
    // Create an overlayMaps object to hold the bikeStations layer
    var overlayMaps = {
      "Squirrels Location": squirrels
    };
  
    // Create the map object with options
    var map = L.map("map", {
      center: [40.79, -73.96],
      zoom: 16,
      layers: [lightmap, squirrels]
    });
  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }
 
d3.json("/raw-web-api", function (mydata) { 
    response = mydata
    console.log(response); 
    function createMarkers(response) {

        // Pull the "stations" property off of response.data
        var location = response.geocoded_column;
    
        // Initialize an array to hold bike markers
        var locationArray = [];
        var colorArray = [];
        var ChasingArray = [];
        // Loop through the stations array
        for (var index = 0; index < response.length; 100) {
        var location = response[index].geocoded_column;
        var color = response[index].primary_fur_color;
        var chasing = response[index].chasing;
        // For each station, create a marker and bind a popup with the station's name
        var squirrelMarker = L.marker([location.coordinates[1], location.coordinates[0]])
            .bindPopup("<h3>" + color + "<h3><h3>Approaching " + chasing + "</h3>");
    
        // Add the marker to the bikeMarkers array
        locationArray.push(squirrelMarker);
        }
    
        // Create a layer group made from the bike markers array, pass it into the createMap function
        createMap(L.layerGroup(locationArray));
    }
    createMarkers(response);
});
