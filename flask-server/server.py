from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import scraper


app = Flask(__name__)
CORS(app)
#Members Api route
@app.route('/product')
def facts():
    productData = scraper.scraperData()
    return jsonify(productData)

if __name__ == "__main__":
    app.run(debug=True)