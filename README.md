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
----------------

###  Web API 
*Data Set
----------------
https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw


### ETL Process 
*Extract: Our original data came from the API call 
*Transform: Data cleaning or transformation was required in Jypter notebook.
*Load: The final database was Mongo DB, tables/collections, and why this was chosen.
* Loading Data
### MongoDB
### Flask
![alt text](https://github.com/WilliamRoll/Project-2/blob/main/static/img/Flowchart.png)

### Creation of  Visualizations
* Bar Graphs:
  * The two bar graphs focused on primary fur color (gray, cinnamon, and black), approaches, and indifference. The "approach" variable value relied on whether or not a squirrel approached a human for food, while the "indifferent" variable was determined by whether or not a squirrel was indifferent to human presence.
  * Primary fur color was used in both bar graphs, while the values of approach/indifference were given a numerical value of 1. Using conditional statements, the totals for each fur color was determined.
* Heatmap:
  * The data set consists of geological locations of the squirrels. which was used to show the location of the squirrels.
  * It showed us there were a siginficant amount of squirrels. so you can look where they are and either avoid them or go look at them.	
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


