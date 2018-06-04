const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    users: [{
        type: String,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', eventSchema);