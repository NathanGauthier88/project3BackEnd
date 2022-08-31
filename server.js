// Dependancies 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const grapplerRouter = require('./controllers/grapplers');

//Initialize the app

const app = express();

// Configure Settings

require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;


// Connect to MongoDb using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));


mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB Error:' + error.message));



// Mount Routes
app.get('/', (req, res) => {
    res.send('Welcome to Grappler API');
});

app.use('/api/grappler', grapplerRouter);


// Tell the App to Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`)
});