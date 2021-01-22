//API Query Variables
var base = "https://data.cityofnewyork.us/resource/vfnx-vebw.json?";
var limit = "&$limit=10000" 

var url = base + limit

d3.json(url,function(response){
    console.log(response)
});