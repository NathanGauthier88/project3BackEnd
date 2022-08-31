// Define Models
const mongoose = require('mongoose');

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

module.exports = mongoose.model('Grappler', grapplerSchema);