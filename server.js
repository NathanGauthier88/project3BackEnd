// Dependancies 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

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

// Define Models

const Schema = mongoose.Schema;
const grapplerSchema = new Schema({
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    name: String,
    team: String,
    lineage: String,
    rank: String,
    championships: String,
    techniques: String,
    weight: String,
    wins: String
}, { timestamps: true });

const Grappler = mongoose.model('Grappler', grapplerSchema);

// Mount Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Routes/Controller actions

// Index

app.get('/grappler', async (req, res) => {
    try {
        res.status(200).json(await Grappler.find({}));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });    
    }
});

// Create 

app.post('/grappler', async (req, res) => {
    try {
        res.status(201).json(await Grappler.create(req.body))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// delete 

app.delete('/grappler/:id', async (req, res) => {
    try {
        res.status(200).json(await Grappler.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// update

app.put('/grappler/:id', async (req, res) => {
    try {
        res.status(200).json(await Grappler.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// Tell the App to Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`)
});