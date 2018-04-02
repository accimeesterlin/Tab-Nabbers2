
const User = require("../models/user");
const axios = require("axios");

module.exports = {
    saved: (req, res, next) => {
        const {
            id
        } = req.body;

        User.findOne({ email: req.email })
            .then((user) => {
                if (user.favorite.includes(id)) {
                    res.status(409).json({ error: "Already saved!" });
                } else {
                    user.favorite.push(id);
                    user.save((err) => {
                        if (err)
                            res.status(409).json({ error: "Not able to save" });
                        res.json({ msg: "Data has successfully been saved" });
                    });
                }
            })
            .catch((err) => res.status(409).json({ error: "Not able to save it" }));
    },


    allSaveEvents: (req, res, next) => {

        User.findOne({ email: req.email })
            .then((user) => {
                const favorites = user.favorite; // favorites
                const savedEvents = [];

                let getFavorite = async () => {
                    for (let i = 0; i < favorites.length; i++) {
                        const event = await axios({
                            url: "https://www.eventbriteapi.com/v3/events/" + favorites[i],
                            method: "GET",
                            headers: {
                                "Authorization": `Bearer ${process.env.EVENTBRITE_KEY}`
                            }
                        });
                        savedEvents.push(event.data);
                    }
                    return savedEvents;
                }

                getFavorite()
                    .then((data) => res.json({
                        favorite: data,
                        id:user.favorite
                    }))
                    .catch((err) => res.status(409).json({error: "Not pulling events"}));

            })
            .catch((err) => res.status().json({ error: "Not able to fetch data" }));
    },

    

};