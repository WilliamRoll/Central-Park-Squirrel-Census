// barchart??

var svgWidth = 600;
var svgHeight = 500;

//margin for charts are here 
var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
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

//Load data from API
d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 

    //Create counters for each fur color, if approach is true
    var gray_approach_count=0
    var cinnamon_approach_count=0
    var black_approach_count=0


    // loop
    for (var index = 0; index < data.length; index++){
        var approach = data[index].approaches;
        var primary_color = data[index].primary_fur_color;
        // console.log(primary_color)
        
        if(approach=="True" && primary_color=="Gray"){
            gray_approach_count+=1
        }
        else if (approach=="True" && primary_color=="Cinnamon") {
            cinnamon_approach_count+=1
            }
        else if (approach=="True" && primary_color=="Black") {
            black_approach_count+=1
        }

        
    }


    var true_dict = {
        "Gray": gray_approach_count,
        "Cinnamon": cinnamon_approach_count,
        "Black": black_approach_count
    };
    console.log(true_dict)
    
    // converting data into array
    const true_array = Object.entries(true_dict).map(([key, value]) => ({
    key: key,
    value: value
    }));
    
    console.log(true_array)


    //////////////////////

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
        .domain(true_array.map(d => d.key))
        .range([0, width])
        .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(true_array, d => d.value)])
        .range([height, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup.append("g")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);




    //////////////////////


    var barSpacing = 10; // desired space between each bar
    var scaleY = 10; // 10x scale on rect height
  
    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = (width - (barSpacing * (true_array.length - 1))) / true_array.length;
  
    // @TODO
    // // Create code to build the bar chart using the tvData.
    // chartGroup.selectAll(".bar")
    //   .data(true_array)
    //   .enter()
    //   .append("rect")
    //   .classed("bar", true)
    //   .attr("width", d => barWidth)
    //   .attr("height", d => d.value * scaleY)
    //   .attr("x", (d, i) => i * (barWidth + barSpacing))
    //   .attr("y", d => height - d.value * scaleY);

        // Create one SVG rectangle per piece of tvData
    // Use the linear and band scales to position each rectangle within the chart
    chartGroup.selectAll(".bar")
    .data(true_array)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.key))
    .attr("y", d => yLinearScale(d.value))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => height - yLinearScale(d.value));





    })
