const axios = require("axios");
const api = require('../utils/api');
const coreHelper = require('../utils/coreHelper');
const Event = require('../models/events');
const User = require('../models/user');

/*
    Event: 
        "eventId": "47203102751",
        "userId": "5b0cb8668fca36d7887da143",
        "description": "JavaScript is the language responsible for much of the beautiful parts of your digital life. Fall in love with the language thats only growing in fame, glamor, and attention by developers the world over.Let us know if you want to give a JS-related talk (20-30 minutes) or lightning talk (5 minutes) in English or Filipino.Sponsor:Nokia Technology Center Philippines CareersSpeakers:- TBA- TBA- TBALive the higher-order life of JavaScript with us. This event is free and open to anyone interested in all things JavaScript. Make sure to support the event sponsor and Amagi Academy who bring you the best in technology education around the Philippines.",
        "title": "Manila JavaScript #28 - JavaScript Life",
        "date": "2018-07-19T19:00:00",
        "logo": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46260951%2F36553811998%2F1%2Foriginal.jpg?auto=compress&s=690c9a5b26a7eed42a723c75af702888"
*/


// Module Design Pattern
const eventBrite = (() => {

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
                message: 'Event Saved!'
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