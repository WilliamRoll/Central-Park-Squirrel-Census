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

//Creating counters
var gray_approach_count=0
var cinnamon_approach_count=0
var black_approach_count=0
// var gray_true_dict = []

// retrieving test.json data
d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 

    // color_arr = []
    // chase_arr = []
    var gray_true_dict=[];
    var colors_true_dict=[]

    // loop
    for (var index = 0; index < data.length; index++){
        var approach = data[index].approaches;
        var primary_color = data[index].primary_fur_color;
        // console.log(primary_color)
        
        if (approach="True"){
            colors_true_dict.push({
                key: primary_color,
                value: approach
            })
        }

        if (approach=="True" && primary_color=="Gray"){
            gray_true_dict.push({
                key: "Gray",
                value: "True"

            })
        }
    }
    console.log(gray_true_dict)
    console.log(colors_true_dict)

    // // loop
    // data.forEach(function(dataSet){
    //     approach=dataSet.approaches
    //     primary_color = dataSet.primary_fur_color; 
        // console.log(primary_color)
        
        // //Counters for approach and color
        // if(approach=="True" && primary_color=="Gray"){
        //     gray_approach_count+=1
        // }
        // else if (approach=="True" && primary_color=="Cinnamon") {
        //     cinnamon_approach_count+=1
        //   }
        // else if (approach=="True" && primary_color=="Black") {
        //     black_approach_count+=1
        // }
        

    // primary_color = dataSet.primary_fur_color;
    // chase = dataSet.chasing;
    // color_arr.push(primary_color)
    // chase_arr.push(chase)
    // });
    // console.log(color_arr);
    // console.log(chase_arr);
    });
    // console.log(gray_approach_count)
    // console.log(cinnamon_approach_count)
    // console.log(black_approach_count)
// });

//Counter only works inside the loop...not sure how this will work with visualizations

// console.log(cinnamon_approach_count)
// console.log(black_approach_count)








