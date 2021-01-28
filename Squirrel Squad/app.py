import json
from flask_pymongo import PyMongo
from flask import Flask, jsonify, render_template, redirect
from bson.json_util import dumps
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/html-templating")
def html_templating():
    return render_template("html-templating.html")

@app.route("/heatmap.html")
def heat_mapping():
    return render_template("heatmap.html")

@app.route("/scatter.html")
def scatter_plot():
    return render_template("scatter.html")

@app.route("/raw-web-api.html")
def data_api():
    return render_template("raw-web-api.html")
    
@app.route("/process.html")
def process_img():
    return render_template("process.html")

@app.route("/leaflet.html")
def leaflet():
    return render_template("leaflet.html")

@app.route("/raw-web-api.html")
def data_api():
    return render_template("raw-web-api.html")

#route that will return Web API JSON data
@app.route("/raw-web-api")
def scrape():
    squirrel_data = get_squirrel_data_from_db()
    return jsonify(squirrel_data)

#function that queries database and returns the data
def get_squirrel_data_from_db():
    client = MongoClient('mongodb://localhost:27017/')
    
    db = client.Squirrel_db
    collection = db.Squirrel

    results_dict = list(collection.find({}, {'_id':False}))
    client.close()

    return results_dict

if __name__ == "__main__":
    app.run(debug=True)
    