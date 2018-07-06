const axios = require("axios");
const api = require('../utils/api');
const coreHelper = require('../utils/coreHelper');
const Event = require('../models/events');
const User = require('../models/user');



// Module Design Pattern
const eventBrite = (() => {


    // Utils
    const filterEvents = (events) => {
        const shortEventName = events.filter((el) => el.name.text.length <= 68);
        return shortEventName;
    };

    const checkDuplicateEvent = (events, eventId) => {
        let isDuplicated = false;
        for (let i = 0; i < events.length; i++) {
            if (events[i].eventId === eventId) {
                isDuplicated = true;
            }
        }
        return isDuplicated;
    };


    // Main Functions
    const saveEventToFavorite = async (req, res, next) => {
        try {
            const userId = req.body.userId; // TODO get from cookies
            const eventId = req.body.eventId;

            const user = await User.findOne({
                _id: userId
            });

            const events = user.favoriteEvents; 
            let isDuplicated = checkDuplicateEvent(events, eventId);

            if (isDuplicated) {
                throw {
                    message: 'Duplicate event'
                };
            }

            const saveEvent = await User.findOneAndUpdate({
                _id: userId
            }, {
                $push: {
                    favoriteEvents: req.body
                }
            });
            next({
                statusCode: 200,
                message: 'Event Saved!',
                eventId
            });
        } catch (error) {
            next({
                errorMessage: error.message,
                statusCode: 500,
                status: 'rejected',
                error: 'Failed to add event to favorite'
            });
        }
    };


    const searchEventsByLocation = async (req, res, next) => {
        const endpoint = api.eventbrite_search;

        const options = {
            q: req.query.q,
            categories: 102,
        };

        // Check if there is location
        if (req.query.latitude && req.query.longitude) {
            options['location.latitude'] = req.query.latitude;
            options['location.longitude'] = req.query.longitude;
            options['location.within'] = '80mi';
        }
        const url = coreHelper.generateUrl(endpoint, options);

        try {
            const response = await axios({
                url,
                headers: {
                    "Authorization": `Bearer ${process.env.EVENTBRITE_KEY}`
                }
            });
            const events = filterEvents(response.data.events);

            next({
                events,
                statusCode: 200,
                status: 'success'
            });
        } catch (error) {
            next({
                error: error.response.data,
                errorMessage: 'Not able to pull events ',
                statusCode: error.response.data.status_code,
                status: 'rejected'
            });
        }
    };

    // Features
    return {
        searchEventsByLocation,
        saveEventToFavorite
    };
})();

module.exports = eventBrite;