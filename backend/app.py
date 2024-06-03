from flask import Flask, request, jsonify
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Configuration for MongoDB
MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
client = MongoClient(MONGO_URI)
db = client.contact_db
contacts_collection = db.contacts

@app.route('/submit', methods=['POST'])
def submit_contact():
    data = request.get_json()
    
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({'error': 'Please provide all required fields'}), 400

    contact = {
        'name': name,
        'email': email,
        'phone': phone,
        'message': message
    }

    result = contacts_collection.insert_one(contact)
    
    return jsonify({'message': 'Contact submitted successfully', 'id': str(result.inserted_id)}), 201

@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = contacts_collection.find()
    contact_list = []
    for contact in contacts:
        contact_list.append({
            'id': str(contact['_id']),
            'name': contact['name'],
            'email': contact['email'],
            'phone': contact['phone'],
            'message': contact['message']
        })
    
    return jsonify(contact_list), 200

if __name__ == '__main__':
    app.run(debug=True)
