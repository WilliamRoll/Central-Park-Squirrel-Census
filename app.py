import json
from flask_pymongo import PyMongo
from flask import Flask, jsonify, render_template, redirect
from bson.json_util import dumps
from flask_pymongo import MonogoClient
#from flask_pymongo import PyMongo

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/html-templating")
def html_templating():
    return render_template("html-templating.html")

if __name__ == "__main__":
    client = MongoClient()
    db = client['Test']
    collection = db['Squirrel']
    cursor = collection.fin({})
    with open('collection.json', 'w') as file:
        file.write('[')
        for document in cursor:
            file.write(dumps(document))
            file.write(',')
        file.write(']')
    app.run(debug=True)