const axios = require("axios");
const api = require('../utils/api');
const coreHelper = require('../utils/coreHelper');
const eventBrite = (() => {


    const filterEvents = (events) => {
        const shortEventName = events.filter((el) => el.name.text.length <= 68);
        return shortEventName;
    };

    const saveEvent = (req, res, next) => {

        // TODO
        // id
        // name
        // logo
        // start
        // end

    };


    const searchEventsByLocation = async (req, res, next) => {
        const {
            q,
            latitude,
            longitude
        } = req.query;

        const endpoint = api.eventbrite_search;

        const url = coreHelper.generateUrl(endpoint, {
            q,
            categories: 102,
            'location.latitude': latitude,
            'location.longitude': longitude,
            'location.within': '80mi'
        });

        try {
            const response = await axios({
                url,
                headers: {
                    "Authorization": `Bearer ${process.env.EVENTBRITE_KEY}`
                }
            })
            const events = filterEvents(response.data.events);

            next({
                events,
                statusCode: 200
            });
        } catch (error) {
            next({
                error: error.response.data,
                errorMessage: 'Not able to pull events ',
                statusCode: 500,
            });
        }
    };

    // Features
    return {
        searchEventsByLocation,
        saveEvent
    };
})();

module.exports = eventBrite;