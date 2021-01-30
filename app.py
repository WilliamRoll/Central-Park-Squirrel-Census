#Import all required extensions for app to run
import json
from flask_pymongo import PyMongo
from flask import Flask, jsonify, render_template, redirect
from bson.json_util import dumps
from pymongo import MongoClient

app = Flask(__name__)

#Provide a route to the page that is presented when app is initially run 
@app.route("/")
def home():
    #GoTo webpage
    return render_template("index.html")

#Provide a route to the index page itself when it is clicked from any page
@app.route("/index.html")
def homepage():
    #GoTo webpage
    return render_template("index.html")

#Provide a route to the html process page
@app.route("/process.html")
def process_page():
    #GoTo webpage
    return render_template("process.html")

#Provide a route to the html pie chart page
@app.route("/bar.html")
def bar_plot():
    #GoTo webpage
    return render_template("bar.html")

#Provide a route to the html pie chart page
@app.route("/pie.html")
def pie_plot():
    #GoTo webpage
    return render_template("pie.html")

#Provide a route to the html heatmap page
@app.route("/heatmap.html")
def heat_mapping():
    #GoTo webpage
    return render_template("heatmap.html")

#Provide a route to the html leaflet marker page
@app.route("/leaflet.html")
def marker_plot():
    #GoTo webpage
    return render_template("leaflet.html")

#Provide a route to the html page where the raw json data is being stored
@app.route("/raw-web-api.html")
def data_api():
    #GoTo webpage
    return render_template("raw-web-api.html")

#Provide a route that will return Web API JSON data that can be used in other webpages
@app.route("/raw-web-api")
def scrape():
    #Set variable to hold what is returned from calling the function
    squirrel_data = get_squirrel_data_from_db()
    #Jsonify the query 
    return jsonify(squirrel_data)

#function that queries database and returns the data
def get_squirrel_data_from_db():
    client = MongoClient('mongodb://localhost:27017/')
    
    #Variables for Mongo database and collection
    db = client.Squirrel_db
    collection = db.Squirrel

    #Query database and put in a list
    results_dict = list(collection.find({}, {'_id':False}))
    client.close()

    #Dictionary is returned from calling function
    return results_dict

if __name__ == "__main__":
    app.run(debug=True)


