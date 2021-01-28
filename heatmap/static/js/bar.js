// Dataset we will be using to set the height of our rectangles.
d3.json("/raw-web-api", function (mydata) { 
    response = mydata
    console.log(response); 
    var AgeArray = [];

    
        // Loop through the stations array
        for (var index = 0; index < response.length; index++) {
        var age = response[index].age;
        if (age) {
            AgeArray.push(age);
          }
        
        };

// Setting the dimensions for the SVG container
var svgHeight = 600;
var svgWidth = 400;

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// svgGroup now refers to the `g` (group) element appended.
// The SVG group would normally be aligned to the top left edge of the chart.
// Now it is offset to the right and down using the transform attribute
var svgGroup = svg.append("g")
  .attr("transform", "translate(50, 100)");

// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svgGroup.selectAll("rect")
  .data(AgeArray)
  .enter()
  .append("rect")
  .attr("width", 50)
  .attr("height", function(data) {
    return data * 10;
  })
  .attr("x", function(data, index) {
    return index * 60;
  })
  .attr("y", function(data) {
    return 600 - data * 10;
  })
  .attr("class", "bar");

});
