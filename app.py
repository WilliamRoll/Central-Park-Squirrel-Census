from flask import Flask, jsonify, render_template, redirect

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/html-templating")
def html_templating():
    return render_template("html-templating.html")

if __name__ == "__main__":
    app.run(debug=True)