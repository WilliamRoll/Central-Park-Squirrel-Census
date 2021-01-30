# Project-2
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/static/img/squirrel_homepage.jpg)
Members
----------------
Rachel Chan,
Zach Kopec,
Sherin Mattappallil,
Kinnari Patel,
Bill Roll 

Project Proposal/Topic
----------------
 When we think of potential harm in New York City, we primarily think of other people and manmade objects. However, there is a variation of wildlife that also 
resides there as well. Looking at Central Park, specifically, several species of mammals, birds, and reptiles that also call the city their home. The members in our 
group are interested in one such mammal, the squirrel. Our project aims to take information gathered on the squirrels of Central Park and display the data 
meaningfully to help keep natives, visitors, and the squirrels safe . Factors such as geological location, age, and behavior will all determine the outcomes of our
visualizations as we look to inform the public with our data.

Are Squirrels Aggressive or Cute??

Data Set
----------------
https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw

Supportive Article
----------------
https://nypost.com/2019/03/22/animal-lovers-rip-proposed-ban-on-feeding-pigeons-and-squirrels/

Summary of Goals
----------------
* Query data using API url.
* Clean data in Jupyter notebook using pandas
* Pass dataframe into a dictionary and then insert dictionary items as documents into MongoDB
* Create Flask application to host website and provide channels to other pages
* Query MongoDB data into python application  
* Establish API of our own data
* Create responsive webpage with multiple places to house information
* Query data into from project API to other webpages within the project
* Plotting behavior of squirrels in visualizations such as scatterplot, heatmap etc. 

Summary of Steps Taken
# Extracting Data
* API Query Through https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw
  * Assemble url query in string format and pull into Jupyter Notebook.
  
# Transforming Data
* Pandas
  * Pass the API query into a dataframe.
  * Clean columns that would render data unusable.
  * Convert dataframe back into a dictionary so that it can be loaded into a collection in MongoDB.

# Loading Data
* MongoDB
  * Load dictionary data from converted API query so that each dictionary item would represent a single item within the Squirrel collection.
  * House dataset so that it can be easily accessed from external applications as well as preventing the need to create csv files to hold data between querying,                             cleaning, and presenting.
* Flask
  * Provide a platfrom to host a website on and link the webpates together through routing.
  * Query data into application and route the data to an API within our application that can further manipulated through D3 javascript scripts on any html webpage found within the project. 

# Creation of  Visualizations
* Bar Graphs:
  * The two bar graphs focused on primary fur color (gray, cinnamon, and black), approaches, and indifference. The "approach" variable value relied on whether or not a squirrel approached a human for food, while the "indifferent" variable was determined by whether or not a squirrel was indifferent to human presence.
  * Primary fur color was used in both bar graphs, while the values of approach/indifference were given a numerical value of 1. Using conditional statements, the totals for each fur color was determined.
* Heatmap:
  * The data set consists of geological locations of the squirrels. which was used to show the location of the squirrels.
  * It showed us there were a siginficant amount of squirrels. so you can look where they are and either avoid them or go look at them.	
* Leaflet Squirrel Behavior Map:
  * This visualization displays the geographic location of squirrels based on the behaviors recorded within our dataset. Behaviors chosen were: Approaching, Chasing, Climbing, Eating, Running, and Other. 
  * Each of these behaviors is given a unique icon and color to identify them on the map. A pop up will also display if the point is clicked on and will identify the behavior the point represents. Each of the overlays can be selected/unselected in order to only show certain behaviors at a time. 

Inspiration
----------------


Visuals
----------------
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/images/SquirrelApproach.png)
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/images/SquirrelIndifferent.png)
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/images/Pie.png)
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/images/Heatmap.png)
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/images/Markerplot.png)

Status
----------------
In progress


