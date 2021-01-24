import json
from flask_pymongo import PyMongo
from flask import Flask, jsonify, render_template, redirect
from bson.json_util import dumps
from pymongo import MongoClient
#from flask_pymongo import PyMongo

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

if __name__ == "__main__":
    # client = MongoClient()
    # db = client['Test']
    # collection = db['Squirrel']
    # cursor = collection.find({})
    # with open('collection.json', 'w') as file:
    #     file.write('[')
    #     for document in cursor:
    #         file.write(dumps(document))
    #         file.write(',')
    #     file.write(']')
    app.run(debug=True)

# conn = 'mongodb://localhost:27017'
# client = MongoClient(conn)
# db = client['Test']
# sqs = db['Squirrel']

# mydoc = db.find(sqs)

# for x in mydoc:
#     print(x)



#function that queries database and returns the data
def get_squirrel_data_from_db():
    client = MongoClient('mongodb://localhost:27017/')
    
    db = client.Squirrel_db
    collection = db.Squirrel

    for doc in collection.find():
        print(doc)

