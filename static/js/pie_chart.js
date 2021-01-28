// area dimensions

// need to update pie chart....

var svgWidth = 500;
var svgHeight = 400;

//margin for charts are here 
var margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg wrapper
// IMP need to add HTML div id = "pie_chart"

var svg = d3
    .select("#pie_chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//append
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// retrieving test.json data
d3.json("/raw-web-api", function (behaviorData) { 
    
    console.log(behaviorData); 

// CHART variables:  Primary Fur color and Indifferent
// indifferent behavior - true or false?

    //var 
    var black_count=0
    var cinnamon_count=0

    for (var a= 0; a < data.length; a++){

        var primary_color = data[a].primary_fur_color;
        var indifferents = data[a].indifferent;
        
        if(indifferents=="True" && primary_color=="Cinnamon"){
            cinnamon_count+=1
        }
        else if (indifferents=="True" && primary_color=="Black") {
            black_count+=1
            }
    }

    var my_dict = {
        "Cinnamon": cinnamon_approach_count,
        "Black": black_approach_count
    };
    console.log(my_dict)
    
    const my_arr = Object.entries(my_dict).map(([key, value]) => ({
    key: key,
    value: value
    }));
    
    console.log(my_arr)


// X
    var xBandScale = d3.scaleBand()
        .domain(my_arr.map(d => d.key))
        .range([0, width])
        .padding(0.2);

// Yl
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(my_arr, d => d.value)])
        .range([height, 0]);


// axis functions
    var bAxis = d3.axisBottom(xBandScale);
    var lAxis = d3.axisLeft(yLinearScale).ticks(10);

// Appending axes 
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bAxis);

    chartGroup.append("g")
        .call(lAxis);

  // m
    chartGroup.selectAll(".bar")
        .data(my_arr)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", "blue")
        .attr("x", d => xBandScale(d.key))
        .attr("y", d => yLinearScale(d.value))
        .attr("width", xBandScale.bandwidth())
        .attr("height", d => height - yLinearScale(d.value))

}).catch(function(error) {
    console.log(error);
});



