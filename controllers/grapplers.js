const Grappler = require("../models/grappler")
const router = require('express').Router();

// Routes/Controller actions

// Index

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await Grappler.find({}));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });    
    }
});

// Create 

router.post('/', async (req, res) => {
    try {
        res.status(201).json(await Grappler.create(req.body))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// delete 

router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Grappler.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// update

router.put('/:id', async (req, res) => {
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

module.exports = router;