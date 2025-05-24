from flask import Flask,request,jsonify
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route("/", methods = ["POST"])
def handle_form():
    data = request.get_json()
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    queryType = data.get('queryType')
    message = data.get('message')
    print('Recieved data', {firstName,lastName,email,queryType, message})


    return jsonify({"message": "Form recievd sucessfully", "data": data})

if __name__ == '__main__':
    app.run(debug=True)