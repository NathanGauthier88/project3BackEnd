// Dependancies 
const express = require('express');

//Initialize the app

const app = express();

// Configure Settings

require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;


// Connect to MongoDb using Mongoose

// Mount Middleware

// Mount Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Tell the App to Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`)
});