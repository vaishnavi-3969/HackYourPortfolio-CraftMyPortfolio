const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vaishnavikale3011:Password@123@portfolio.cntldby.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

const getDatabase = () => {
  return db;
};

module.exports = {
  connectToDatabase,
  getDatabase,
};
