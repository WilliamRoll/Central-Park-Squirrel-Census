var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 


    var squirrel_approach = []
    var approach_log = []
    var thing = []
    
    // loop
    for (var index = 0; index < data.length; index++){
       
        var approach = data[index].approaches;
        var primary_color = data[index].primary_fur_color;

        if(data[index].approaches == "True"){
            thing.push("Approaches")
            approach_log.push(1)
        }
        else if (data[index].chasing=="True") {
            thing.push("chasing")
            approach_log.push(1)
        }
        else if (data[index].climbing=="True") {
            thing.push("Climbing")
            approach_log.push(1)
        }
        else if (data[index].eating=="True") {
            thing.push("Eating")
            approach_log.push(1)
        }
        else if (data[index].running=="True") {
            thing.push("Running")
            approach_log.push(1)
        }
        else {
            thing.push("Other")
            approach_log.push(1)
        }
    }

    console.log(squirrel_approach)
    console.log(approach_log)

    // Create the Trace
    var trace1 = {
    x: squirrel_approach,
    y: approach_log,
    type: "bar"
    };

    // Create the data array for the plot
    var data = [trace1];

    // Define the plot layout
    var layout = {
    title: "Squirrel ",
    xaxis: { title: "Eye Color" },
    yaxis: { title: "Flicker Frequency" }
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);


});
