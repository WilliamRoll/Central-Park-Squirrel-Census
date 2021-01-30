// Bar Chart


var svgWidth2 = 600;
var svgHeight2 = 500;

//margin for charts are here 
var margin2 = {
    top: 60,
    right: 30,
    bottom: 60,
    left: 60
};

var width2 = svgWidth2 - margin2.left - margin2.right;
var height2 = svgHeight2 - margin2.top - margin2.bottom;

// svg wrapper
var svg2 = d3
    .select("#color_barchart")
    .append("svg")
    .attr("width", svgWidth2)
    .attr("height", svgHeight2)
    

//append
var chartGroup2 = svg2.append("g")
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

//Load data from API
d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 

    //Create counters for each fur color, if approach is true
    //True
    var gray_approach_count=0
    var cinnamon_approach_count=0
    var black_approach_count=0    
    //False
    var gray_n_approach_count=0
    var cinnamon_n_approach_count=0
    var black_n_approach_count=0

    // loop
    for (var index = 0; index < data.length; index++){
        var approach = data[index].approaches;
        var primary_color = data[index].primary_fur_color;
        
        if(approach=="True" && primary_color=="Gray"){
            gray_approach_count+=1
        }
        else if (approach=="True" && primary_color=="Cinnamon") {
            cinnamon_approach_count+=1
            }
        else if (approach=="True" && primary_color=="Black") {
            black_approach_count+=1
        }

        //If false:
        else if(approach=="False" && primary_color=="Gray"){
            gray_n_approach_count+=1
        }
        else if (approach=="False" && primary_color=="Cinnamon") {
            cinnamon_n_approach_count+=1
            }
        else if (approach=="False" && primary_color=="Black") {
            black_n_approach_count+=1
        }
    }

    var true_dict = {
        "Graytrue": gray_approach_count,
        "Cinnamontrue": cinnamon_approach_count,
        "Blacktrue": black_approach_count
    };
    console.log(true_dict)

    var false_dict = {
        "Grayfalse": gray_n_approach_count,
        "Cinnamonfalse": cinnamon_n_approach_count,
        "Blackfalse": black_n_approach_count
    };
    console.log(false_dict)

    var all_dict = {
        "Gray": gray_approach_count/(gray_approach_count+gray_n_approach_count),
        "Cinnamon": cinnamon_approach_count/(cinnamon_approach_count+cinnamon_n_approach_count),
        "Black": black_approach_count/(black_approach_count+black_n_approach_count)
    };
    console.log(all_dict)
    
    // converting data into array
    const all_array = Object.entries(all_dict).map(([key, value]) => ({
    key: key,
    value: value
    }));
    
    console.log(all_array)

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale2 = d3.scaleBand()
        .domain(all_array.map(d => d.key))
        .range([0, width2])
        .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale2 = d3.scaleLinear()
        .domain([0, d3.max(all_array, d => d.value*100)+0.5])
        .range([height2, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis2 = d3.axisBottom(xBandScale2);
    var leftAxis2 = d3.axisLeft(yLinearScale2).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup2.append("g")
        .call(leftAxis2);

    chartGroup2.append("g")
        .attr("transform", `translate(0, ${height2})`)
        .call(bottomAxis2);

    var barSpacing2 = 10; // desired space between each bar
    var scaleY2 = 10; // 10x scale on rect height
  
    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth2 = (width2 - (barSpacing2 * (all_array.length2 - 1))) / all_array.length2;
  

    //APPENDING BARS

    var testGroup2 = chartGroup2.selectAll(".bar")
    .data(all_array)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale2(d.key))
    .attr("y", d => yLinearScale2(d.value*100))
    .attr("width", xBandScale2.bandwidth())
    .attr("height", d => height2 - yLinearScale2(d.value*100))

    // Step 1: Append tooltip div
    var toolTip2 = d3.select("body")
      .append("div")
      .classed("tooltip", true);



    // Step 2: Create "mouseover" event listener to display tooltip
    testGroup2.on("mouseover", function(d) {
      toolTip2.style("display", "block")
          .html(
            `<strong>${d.key}<strong><hr>${(d.value*100).toFixed(2)}%`)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
    })
      // Step 3: Create "mouseout" event listener to hide tooltip
      .on("mouseout", function() {
        toolTip2.style("display", "none");
      });

      chartGroup2.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin2.left)
      .attr("x", 0 - (height2/1.2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Approaching Squirrels");

        chartGroup2.append("text")
        .attr("transform", `translate(${width2/3.3}, ${height2 + margin2.top-13})`)
        .attr("class", "axisText")
        .text("Primary Squirrel Color");

        chartGroup2.append('text')
        .attr('x', width2 / 2)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .text('Squirrel Color and Approaches')

    //making charts responsive
        svg2
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 740 500");


    })



///////////SECOND BAR///////
// Bar Chart


var svgWidth = 600;
var svgHeight = 500;

//margin for charts are here 
var margin = {
    top: 60,
    right: 30,
    bottom: 60,
    left: 60
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg wrapper
var svg = d3
    .select("#color_barchart1")
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
    var gray_indifferent_count=0
    var cinnamon_indifferent_count=0
    var black_indifferent_count=0
    var gray_n_indifferent_count=0
    var cinnamon_n_indifferent_count=0
    var black_n_indifferent_count=0

    // loop
    for (var i = 0; i < data.length; i++){
        var indifferent = data[i].indifferent;
        var primary_f_color = data[i].primary_fur_color;
        
        if(indifferent=="True" && primary_f_color=="Gray"){
            gray_indifferent_count+=1
        }
        else if (indifferent=="True" && primary_f_color=="Cinnamon") {
            cinnamon_indifferent_count+=1
            }
        else if (indifferent=="True" && primary_f_color=="Black") {
            black_indifferent_count+=1
        }
        else if(indifferent=="False" && primary_f_color=="Gray"){
            gray_n_indifferent_count+=1
        }
        else if (indifferent=="False" && primary_f_color=="Cinnamon") {
            cinnamon_n_indifferent_count+=1
            }
        else if (indifferent=="False" && primary_f_color=="Black") {
            black_n_indifferent_count+=1
        }
    }

    var indifferent_dict = {
        "Gray": gray_indifferent_count,
        "Cinnamon": cinnamon_indifferent_count,
        "Black": black_indifferent_count
    };
    console.log(indifferent_dict)

    var n_indifferent_dict = {
        "Grayf": gray_n_indifferent_count,
        "Cinnamonf": cinnamon_n_indifferent_count,
        "Blackf": black_n_indifferent_count
    };
    console.log(n_indifferent_dict)

    var all_indifferent_dict = {
        "Gray": gray_indifferent_count/(gray_indifferent_count+gray_n_indifferent_count),
        "Cinnamon": cinnamon_indifferent_count/(cinnamon_indifferent_count+cinnamon_n_indifferent_count),
        "Black": black_indifferent_count/(black_indifferent_count+black_n_indifferent_count)
    };
    console.log(all_indifferent_dict)
    
    
    // converting data into array
    const all_indifferent_array = Object.entries(all_indifferent_dict).map(([key, value]) => ({
    key: key,
    value: value
    }));
    
    console.log(all_indifferent_array)

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
        .domain(all_indifferent_array.map(d => d.key))
        .range([0, width])
        .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(all_indifferent_array, d => d.value*100)+1])
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

    var barSpacing = 10; // desired space between each bar
    var scaleY = 10; // 10x scale on rect height
  
    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = (width - (barSpacing * (all_indifferent_array.length - 1))) / all_indifferent_array.length;
  

    //APPENDING BARS

    var testGroup = chartGroup.selectAll(".bar")
    .data(all_indifferent_array)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.key))
    .attr("y", d => yLinearScale(d.value*100))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => height - yLinearScale(d.value*100))

    // Append tooltip div
    var toolTip = d3.select("body")
      .append("div")
      .classed("tooltip", true);

    // Create "mouseover" event listener to display tooltip
    testGroup.on("mouseover", function(d) {
      toolTip.style("display", "block")
          .html(
            `<strong>${d.key}<strong><hr>${(d.value*100).toFixed(2)}%`)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
    })
      //Create "mouseout" event listener to hide tooltip
      .on("mouseout", function() {
        toolTip.style("display", "none");
      });

      chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height/1.2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Indifferent Squirrels");

        chartGroup.append("text")
        .attr("transform", `translate(${width/3.3}, ${height + margin.top-13})`)
        .attr("class", "axisText")
        .text("Primary Squirrel Color");

        chartGroup.append('text')
        .attr('x', width / 2)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .text('Squirrel Color and Indifference')

        //making charts responsive
        svg
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 740 500");
    })
