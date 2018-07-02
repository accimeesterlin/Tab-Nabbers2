const axios = require("axios");
const api = require('../utils/api');
const coreHelper = require('../utils/coreHelper');
const Event = require('../models/events');
const User = require('../models/user');

// Module Design Pattern
const eventBrite = (() => {

    const filterEvents = (events) => {
        const shortEventName = events.filter((el) => el.name.text.length <= 68);
        return shortEventName;
    };

    const addEventToUserFavorite = async (event, userId, next) => {
        const user = await User.findOneAndUpdate({
            _id: userId
        }, {
            $push: {
                favoriteEvents: event
            }
        });

        next({
            statusCode: 200,
            status: 'success',
            message: 'Successfully saved into user'
        });
    };

    const saveEventToFavorite = async (req, res, next) => {
        try {
            const userId = req.body.userId; // TODO get from cookies
            const eventId = req.body.eventId;

            const userInfo = await User.findOne({
                _id: userId
            });

            const favoriteEvents = userInfo.favoriteEvents;

            if (favoriteEvents.length === 0) {
                addEventToUserFavorite(req.body, userId, next);
            } else {
                const checkExistingEvent = favoriteEvents.findIndex(e => e.eventId === eventId);

                if (checkExistingEvent > -1) {
                    next({
                        errorMessage: 'Failed to add to your favorite',
                        statusCode: 500,
                        status: 'rejected',
                        error: 'Failed adding to favorite'
                    });
                } else {
                    addEventToUserFavorite(req.body, userId, next);
                }
            }
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