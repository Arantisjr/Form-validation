from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

app.config[ "SQLALCHEMY_DATABASE_URI" ] = "postgresql://postgres:1234@localhost/form"
app.config[ "SQLALCHEMY_TRACK_MODIFICATIONS" ] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Person(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    firstName = db.Column(db.String(30), nullable = False, unique = True )
    lastName = db.Column(db.String(30), nullable = False, unique = True )
    email = db.Column(db.String(30), nullable = False )
    message = db.Column(db.String(300), nullable = False)
    queryType = db.Column(db.String(30), nullable = True )

with app.app_context():
    db.create_all()


def __init__(self, firstName, lastName, email, message, queryType):
    self.firstname = firstName
    self.lastName = lastName
    self.email = email
    self.message = message
    self.queryType = queryType


# @app.route("/")
# def home():
#     return "Welcome to the backend"

@app.route("/", methods = ["POST"])
def handle_form():
    data = request.get_json()
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    queryType = data.get('queryType')
    message = data.get('message')

    new_entry = Person(firstName = firstName, lastName =lastName, email = email, queryType = queryType, message = message)
    db.session.add(new_entry)
    db.session.commit()
    print('Recieved data', {firstName,lastName,email,queryType, message})


    return jsonify({"message": "Form recievd sucessfully", "data": data})

if __name__ == '__main__':
    app.run(debug=True)