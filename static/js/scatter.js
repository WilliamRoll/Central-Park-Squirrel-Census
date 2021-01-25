// area dimensions
var svgWidth = 900;
var svgHeight = 480;

//margin for charts are here 
var margin = {
    top: 35,
    right: 45,
    bottom: 65,
    left: 95
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg wrapper
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//append
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// retrieving test.json data
d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 

});
