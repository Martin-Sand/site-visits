const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitSchema = new Schema({
    elevatorID: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Visit', visitSchema);