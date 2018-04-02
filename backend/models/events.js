const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const eventSchema = Schema({
    favorites: {
        event_id: String,
        status: Boolean
    },
    past_events: [{
            type: String
        }]
});

module.exports = mongoose.model('Event', eventSchema);