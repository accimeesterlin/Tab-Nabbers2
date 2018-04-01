const User = require("../models/user");
const Event = require("../models/user");


/**
 * CRUD Operation
 * Create
 * Read
 * Update
 * Delete
 */
module.exports = {

    // Create a user 
    createUser: (req, res, next) => {
        const newData = new User(req.body);
        newData.save((err) => {
            if (err)
                res.status(409).json({ err: "Not able to save" })
            res.json({ msg: "Successfully been saved!" });
        });
    },


    // Read all users from our Data
    readUser: (req, res, next) => {
        User.find({})
            .select("-password")
            .then((users) => res.json({ msg: "Successfully been saved!" }))
            .catch((err) => res.status(409).json({ err: "Not able to save" }));
    },


    // Update the the user info
    updateUser: (req, res, next) => {

        const obj = req.body;

        User.update({ _id: req.body.id }, { $set: obj })
            .then((data) => res.json({ msg: "Data has been updated!" }))
            .catch((err) => res.status(409).json({ error: "Issue updating info" }));
    },

    // Pending
    // deleteUser: (req, res, next) => { 
    //     const obj = req.body;
    //     User.update({ _id: req.body.id }, { $unset: obj })
    //     .then((data) => {
    //         res.json({ msg: "Data has been updated!" });
    //     })
    //     .catch((err) => {
    //         res.status(409).json({ error: "Issue updating info" });
    //     });
    // }
};
