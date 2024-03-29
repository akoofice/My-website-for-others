from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('your mongo client!')
db = client['loginDB']
collection = db['users']

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    first_name = data['firstName']
    last_name = data['lastName']

    user_data = {
        'first_name': first_name,
        'last_name': last_name
    }

    inserted = collection.insert_one(user_data)
    return jsonify({'message': 'Data inserted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
