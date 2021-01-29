// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "light-v10",
    accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
    SQUIRREL_APPROACH: new L.LayerGroup(),
    SQUIRREL_CHASE: new L.LayerGroup(),
    SQUIRREL_CLIMBING: new L.LayerGroup(),
    SQUIRREL_EATING: new L.LayerGroup(),
    SQUIRREL_RUNNING: new L.LayerGroup(),
    SQUIRREL_OTHER: new L.LayerGroup()
};



// Create the map with our layers
var map = L.map("map-id", {
    center: [40.79, -73.96],
    zoom: 16,
    layers: [
        layers.SQUIRREL_APPROACH,
        layers.SQUIRREL_CHASE,
        layers.SQUIRREL_CLIMBING,
        layers.SQUIRREL_EATING,
        layers.SQUIRREL_RUNNING,
        layers.SQUIRREL_OTHER,
    ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
    "Approaching": layers.SQUIRREL_APPROACH,
    "Chasing": layers.SQUIRREL_CHASE,
    "Climbing": layers.SQUIRREL_CLIMBING,
    "Eating": layers.SQUIRREL_EATING,
    "Running": layers.SQUIRREL_RUNNING,
    "Other": layers.SQUIRREL_OTHER
  };

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
    position: "topright"
  });

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
};

// Add the info legend to the map
info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
    SQUIRREL_APPROACH: L.ExtraMarkers.icon({
      icon: "ion-settings",
      iconColor: "yellow",
      markerColor: "yellow",
      shape: "star"
    }),
    SQUIRREL_CHASE: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "red",
      markerColor: "red",
      shape: "circle"
    }),
    SQUIRREL_CLIMBING: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "blue",
      markerColor: "blue-dark",
      shape: "penta"
    }),
    SQUIRREL_EATING: L.ExtraMarkers.icon({
      icon: "restaurant",
      iconColor: "orange",
      markerColor: "orange",
      shape: "circle"
    }),
    SQUIRREL_RUNNING: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "green",
      markerColor: "green",
      shape: "circle"
    }),
    SQUIRREL_OTHER: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "purple",
        markerColor: "purple",
        shape: "circle"
      }),
};



// Perform call to raw web API endpoint
d3.json("/raw-web-api", function (mydata) {
    var response = mydata

    // Initialize a stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for layer group
    var squirrel_status;

    // Loop through the stations (they're the same size and have partially matching data)
    for (var i = 0; i < response.length; i++) {

      // Create a new station object with properties of both station objects

      
      function fillColor(data) {
        var colors = ["#7FFF00", "#dfedbe", "#eede9f", "#FF8C00", "	#FA8072", "#FF0000"]
        if (data.approaches == "True") {
            squirrel_status = "Approaching"
            return colors[0]
        }
        else if (data.chasing == "True") {
            squirrel_status = "Chasing"
            return colors[1]
        }
        else if (data.climbing == "True") {
            squirrel_status = "Climbing"
            return colors[2]
        }
        else if (data.eating == "True") {
            squirrel_status = "Eating"
            return colors[3]
        }
        else if (data.running == "True") {
            squirrel_status = "Running"
            return colors[4]
        }
        else {
            squirrel_status = "Other"
            return colors[5]
        }
        }

      var location = response[i].geocoded_column;

      // Create a new marker with the appropriate icon and coordinates
      var newMarker = L.marker([location.coordinates[1], location.coordinates[0]], {
        icon: icons[squirrel_status]
      });

      // Add the new marker to the appropriate layer
      newMarker.addTo(layers[squirrel_status]);
    }  
    //   // Bind a popup to the marker that will  display on click. This will be rendered as HTML
    //   newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
    // }

    // // Call the updateLegend function, which will... update the legend!
    // updateLegend(updatedAt, stationCount);
});

// function createMap(squirrels) {
  
//     // Create a baseMaps object to hold the lightmap layer
//     var baseMaps = {
//       "Light Map": lightmap
//     };
  
//     // Create an overlayMaps object to hold the bikeStations layer
//     var overlayMaps = {
//       "Squirrels Location": squirrels
//     };
  
//     // Create the map object with options
//     var map = L.map("map", {
//       center: [40.79, -73.96],
//       zoom: 16,
//       layers: [lightmap, squirrels]
//     });
  
//     // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(map);
//   }
 
// d3.json("/raw-web-api", function (mydata) { 
//     response = mydata
//     console.log(response); 
//     function createMarkers(response) {

//         // Pull the "stations" property off of response.data
//         var location = response.geocoded_column;
    
//         // Initialize an array to hold bike markers
//         var locationArray = [];
//         var colorArray = [];
//         var ChasingArray = [];
//         // Loop through the stations array
//         for (var index = 0; index < response.length; index++) {
//         var location = response[index].geocoded_column;
//         var color = response[index].primary_fur_color;
//         var chasing = response[index].chasing;
//         var behaviour = fillColor(response[index]);
//         // For each station, create a marker and bind a popup with the station's name
//         var squirrelMarker = L.marker([location.coordinates[1], location.coordinates[0]])
//             .bindPopup("<h3>" + color + "<h3><h3>Approaching " + behaviour + "</h3>");
    
//         // Add the marker to the bikeMarkers array
//         locationArray.push(squirrelMarker);
//         }
    
//         // Create a layer group made from the bike markers array, pass it into the createMap function
//         createMap(L.layerGroup(locationArray));
//     }
//     createMarkers(response);
//      // Setting up the legend
//     //  var legend = L.control({ position: "bottomright" });
//     //  legend.onAdd = function() {
//     //    var div = L.DomUtil.create("div", "info legend");
//     //    var limits = ["Approaches", "Chasing", "Climbing", "Eating", "Running", "Inactive"];
//     //    var labelsColor = [];
//     //    var labelsText = [];
//     //    var colors = ["#7FFF00", "#dfedbe", "#eede9f", "#FF8C00", "	#FA8072", "#FF0000"]
//     //    // Add min & maxfil
//     //    limits.forEach(function(limit, index) {
//     //      labelsColor.push(`<li style="background-color: ${colors[index]};"></li>`); // <span class="legend-label">${limits[index]}</span>
//     //      labelsText.push(`<span class="legend-label">${limits[index]}</span>`)
//     //    });
 
//     //    var labelsColorHtml =  "<ul>" + labelsColor.join("") + "</ul>";
//     //    var labelsTextHtml = `<div id="labels-text">${labelsText.join("<br>")}</div>`;
 
//     //    var legendInfo = "<h4>Squirrel<br>Behaviour</h4>" +
//     //      "<div class=\"labels\">" + labelsColorHtml + labelsTextHtml
//     //      "</div>";
//     //    div.innerHTML = legendInfo;
 
//     //    return div;
//     //  };
 
//     //  // Adding legend to the map
//     //  legend.addTo(map);
// });


