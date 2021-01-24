// scatterplot 1

// show any correlation between squirrel primary fur color vs chasing.
// correlatiom between primary fur color vs l

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
    .select(".chart")
    .append("svg")
    .attr("width", "svgWidth")
    .attr("height", "svgHeight")


//append
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);



// retrieving test.json data
d3.json("test.json").then(function(testData)

    {
        console.log(testData);
    
    });

















