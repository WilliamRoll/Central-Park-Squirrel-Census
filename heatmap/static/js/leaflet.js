// Function to determine marker color based on earthquake magnitude
var colors = ["#7FFF00", "#dfedbe", "#eede9f", "#FF8C00", "	#FA8072", "#FF0000"]
function fillColor(data) {
  
  if (data.approaches == True) {
    return colors[0]
  }
  else if (data.chasing == True) {
    return colors[1]
  }
  else if (data.climbing == True) {
    return colors[2]
  }
  else if (data.eating == True) {
    return colors[3]
  }
  else if (data.running == True) {
    return colors[4]
  }
  else {
    return colors[5]
  }
}
  // Base layers for maps (no data yet)
  var attribution = "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>";
  
  var satelliteMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: attribution,
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });
  
  var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: attribution,
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });
  
  var outdoorsMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: attribution,
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
  });
  
  // Create a baseMaps object
  var baseMaps = {
    "Satellite": satelliteMap,
    "Grayscale": lightMap,
    "Outdoors": outdoorsMap
  };
  

  d3.json("/raw-web-api", function (mydata) { 
    data = mydata
    console.log(data); 
  
    var earthquakes = L.json(data, {
      // Create circle markers
      pointToLayer: function (data, latlng) {
        var geojsonMarkerOptions = {
          radius: 8,
          stroke: false,
          fillColor: "#ff7800",
          radius: markerSize(data),
          fillColor: fillColor(data),
          color: "white",
          weight: 5,
          opacity: .8,
          fillOpacity: .8
        };
        console.log(data); 
        return L.circleMarker(latlng, geojsonMarkerOptions);
      },
      onEachFeature: function (data, layer) {
        return layer.bindPopup(`<strong>Color:</strong> ${data.primary_fur_color}<br><strong>Chasing:</strong> ${data.chasing}`);
      }
    });
    console.log(earthquakes);
    var platesStyle = {
      "color": "orange",
      "weight": 2,
      "opacity": 1,
      fillOpacity: 0,
    };
    var plates = L.json(data, {
      style: platesStyle
    });
  
    console.log(plates);
        // Create an overlay object
    var overlayMaps = {
          "Behaviour": plates,
          "Noise": earthquakes,
    };
    
        // Define a map object
        var map = L.map("map", {
          center: [37.09, -95.71],
          zoom: 3,
          layers: [satelliteMap, plates, earthquakes]
        });
    
        // Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
          collapsed: false
        }).addTo(map);
    
        // Setting up the legend
        var legend = L.control({ position: "bottomright" });
        legend.onAdd = function() {
          var div = L.DomUtil.create("div", "info legend");
          var limits = ["Approaches", "Chasing", "Climbing", "Eating", "Running", "Inactive"];
          var labelsColor = [];
          var labelsText = [];
          var colors = ["#7FFF00", "#dfedbe", "#eede9f", "#FF8C00", "	#FA8072", "#FF0000"]
          // Add min & maxfil
          limits.forEach(function(limit, index) {
            labelsColor.push(`<li style="background-color: ${colors[index]};"></li>`); // <span class="legend-label">${limits[index]}</span>
            labelsText.push(`<span class="legend-label">${limits[index]}</span>`)
          });
    
          var labelsColorHtml =  "<ul>" + labelsColor.join("") + "</ul>";
          var labelsTextHtml = `<div id="labels-text">${labelsText.join("<br>")}</div>`;
    
          var legendInfo = "<h4>Squirrel<br>Behaviour</h4>" +
            "<div class=\"labels\">" + labelsColorHtml + labelsTextHtml
            "</div>";
          div.innerHTML = legendInfo;
    
          return div;
        };
    
        // Adding legend to the map
        legend.addTo(map);
    
      })
    