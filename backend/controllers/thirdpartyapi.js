const axios = require("axios");


module.exports = {
    eventbrite:{
        search: (req, res, next) => {
            const {
                q,
                latitude,
                longitude
            } = req.query;

            const endpoint = "https://www.eventbriteapi.com/v3/events/search?";
            const params = `q=${q}&categories=102&location.latitude=${latitude}&location.longitude=${longitude}&location.within=80mi`;

            axios({
                url:endpoint + params,
                headers:{
                    "Authorization": `Bearer ${process.env.EVENTBRITE_KEY}`
                }
            })
            
            .then((response) => {
                const events = response.data.events.filter((el) => el.name.text.length <= 68);
                res.json({events, pagination: response.data.pagination});
            })
            .catch((err) => res.status(409).json({error: err.response}));
        }
    }
};