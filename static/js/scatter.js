// area dimensions

// barchart??

var svgWidth = 900;
var svgHeight = 460;

//margin for charts are here 
var margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg wrapper
var svg = d3
    .select("#color_barchart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//append
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// retrieving test.json data
d3.json("/raw-web-api", function (myData) { 
    
    console.log(myData); 

// BAR CHART variables:  Primary Fur color and Approaches

    color_array = []

    approaches_array = []

// looping 

    myData.forEach(function(dataSet){

    primary_color = dataSet.primary_fur_color;

    dataSet.approaches = +dataSet.approaches;

   // approachings = dataSet.approaches;

    color_array.push(primary_color)
    approaches_array.push(approaches)

    });
// console log
    console.log(color_array);
    console.log( approaches_array);

// bandscale--- horizontal axis
    var xBandScale = d3.scaleBand()
        .domain(myData.map(dataSet => dataSet.primary_fur_color))
        .range([0, width])
        .padding(0.2);

// linearscale --- vertical axis
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(myData, dataSet => dataSet.age)])
        .range([height, 0]);


// axis functions
    var bAxis = d3.axisBottom(xBandScale);
    var lAxis = d3.axisLeft(yLinearScale).ticks(5);

// Appending axes 
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bAxis);

    chartGroup.append("g")
        .call(lAxis);

  // making the svg rectangle w/ the scales
    chartGroup.selectAll(".bar")
        .data(myData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", "blue")
        .attr("x", dataSet => xBandScale(d.primary_fur_color))
        .attr("y", dataSet => yLinearScale(d.age))
        .attr("width", xBandScale.bandwidth())
        .attr("height", dataSet => height - yLinearScale(d.age))

}).catch(function(error) {
    console.log(error);
});
