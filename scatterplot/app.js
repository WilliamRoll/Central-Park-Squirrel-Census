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
    
        testData.forEach(function(data){
            data.primary_fur_color = +data.primary_fur_color;
            data.chasing = +data.chasing;

// scalar function
        var xLinearScale = d3.scaleLinear()
     	    .domain([20, d3.max(testData, d => d.primary_fur_color)])
      	    .range([0, width]);

       var yLinearScale = d3.scaleLinear()
     	    .domain([0, d3.max(testData, d => d.chasing)])
            .range([height, 0]);

// axis functions
        var bAxis = d3.axisBottom(xLinearScale);
        var lAxis = d3.axisLeft(yLinearScale);

// Appending axes 

        chartGroup.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(bAxis);

        chartGroup.append("g")
            .call(lAxis);
             
    });

















