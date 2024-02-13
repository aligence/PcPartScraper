from flask import Flask
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
#Members Api route
@app.route('/members')
def members():
    return{'members': ["Member 1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)