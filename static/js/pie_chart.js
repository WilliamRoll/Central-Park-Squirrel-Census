// Pie Chart : 

//variables:  Primary Fur color : gray and cinnamon and Indifferent
// indifferent behavior - true or false?

// need to update pie chart... 
// switched from d3 to plotly

// color - brown and gray
var color = ['rgb(210,105,30)','rgb (127,127,127)'];
  
d3.json("/raw-web-api", function (behaviorData) { 
    
  console.log(behaviorData); 

// counts
  var gray_count=0
  var cinnamon_count=0

  for (var a= 0; a < behaviorData.length; a++ ){

      var primary_color = behaviorData[a].primary_fur_color;
      var indifferents = behaviorData[a].indifferent;
      
      if(indifferents=="True" && primary_color=="Cinnamon"){
          cinnamon_count+=1
      }
      else if (indifferents=="True" && primary_color=="Gray") {
          gray_count+=1
          }
  }
//}
// diction
  var my_dict = {
    "Cinnamon": cinnamon_count,
    "Gray": gray_count
  };
  console.log(my_dict)
 
// my data
  var data = [{
    values: [cinnamon_count, gray_count],
    labels: ['Cinnamon', 'Gray'],
    type: 'pie'
  }];
  // layout
  var layout = {
    height: 500,
    width: 900
  };
  
  // 
  Plotly.newPlot('pie_chart', data, layout);

});





