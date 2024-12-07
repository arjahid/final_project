const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'learn_the_universe';

let db;

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  console.log('Connected to MongoDB');
});

// Register a new user
app.post('/register', (req, res) => {
  const { email, password, accountNumber } = req.body;
  const usersCollection = db.collection('users');

  usersCollection.insertOne({ email, password, accountNumber }, (err, result) => {
    if (err) {
      res.status(500).send('Error registering new user');
    } else {
      res.status(201).send('User registered');
    }
  });
});

// Log in an existing user
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const usersCollection = db.collection('users');

  usersCollection.findOne({ email, password }, (err, user) => {
    if (err) {
      res.status(500).send('Error logging in user');
    } else if (!user) {
      res.status(404).send('User not found');
    } else {
      res.status(200).send('User logged in');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

