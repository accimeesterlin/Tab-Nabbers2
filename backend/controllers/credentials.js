
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Utils = require("../helpers/utils");
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

require("dotenv").config();


// username + password 
const options = {
    auth: {
        api_user: process.env.SENDGRID_USERNAME,
        api_key: process.env.SENDGRID_PASSWORD
    }
};

const client = nodemailer.createTransport(sgTransport(options));


/**
 * Generate a token
 * Might need to refactor and move elsewhere
 * @param {*} data 
 */
const generateToken = ({ _id, email }) => {

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            email,
            _id
        }
    }, process.env.SECRET);

    return token;
};


const salt = bcrypt.genSaltSync(10);


module.exports = {
    signup: (req, res, next) => {
        const {
            email,
            name,
            password
        } = req.body;

        const sendgrid_email = {
            from: 'awesome@bar.com',
            to: `${email}, esterlinaccime@gmail.com`,
            subject: 'Welcome to Tab Nabbers',
            text: 'We are supper excited to have you on the Team. Welcome on board',
            html: `
            <h1>Congratulations on joining the community</h1>
            <p>We are a community of nabbers that love searching for tabs (jobs),
            We're super excited to have you on our team. Hope you enjoy our platform. Start by 
            exploring our favorite features. <p>
            `
        };

        const hash = bcrypt.hashSync(password, salt);

        User.findOne({ email })
            .then((user) => {
                if (user) { res.status(409).json({ error: "Sorry, user already created!" }); }
                else {
                    const newUser = new User({ name, password: hash, email });

                    newUser.save((err) => {
                        if (err) {
                            res.json({ error: "Not able to create a user at this time" });
                        } else {
                            const token = generateToken(newUser); // token
                            client.sendMail(sendgrid_email, (err, info) => {
                                if (err)
                                    res.status(409).json({ error: "Not able to send the email" });
                                res.cookie("token", token).json({ msg: "Email sent!" });
                            });
                        }
                    });
                }
            })
            .catch((err) => res.status(500).json({ error: "Internal error" }));
    },


    signin: (req, res, next) => {
        const {
            email,
            password
        } = req.body;

        User.findOne({ email })
            .then((user) => {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.cookie("token", token).json({ msg: "User is now logged in" });
                } else {
                    res.status(409).json({ error: "Credentials don't match" });
                }
            })
            .catch((err) => res.status(500).json({ error: "User not found" }));
    },


    resetPassword: (req, res, next) => {
        const {
            email
        } = req.body;

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            email
        }, process.env.SECRET);

        const sendgrid_email = {
            from: 'awesome@bar.com',
            to: email,
            subject: 'Password Reset || Bootcruit',
            text: 'We are supper excited to have you on the Team. Welcome on board',
            html: `
            <h2>You requested to reset your password</h2>
            <p>Please click on the following link in order to reset your password<p>
            <a href="http://bootcruitphase1.herokuapp.com/secure/reset/${token}">Reset password</a>
            `
        };

        User.findOne({ email })
            .then((user) => {
                if(user){
                    client.sendMail(sendgrid_email, (err, info) => {
                        if (err)
                            res.status(409).json({ error: "Not able to send the email" });
                        res.json({ msg: "Email sent!" });
                    });
                } else{
                    res.status(409).json({error: "No record found!"});
                }

            })
            .catch((err) => res.status(409).json({ error: "No user found!" }));
    },


    newPassword: (req, res, next) => {
        const {
            password,
            token
        } = req.body;


        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(409).json({ error: "No valid token" });
            } else {
                const hash = bcrypt.hashSync(password, salt);

                User.update({ email: decoded.email }, { $set: { password: hash } })
                    .then((user) => {
                        res.json({ msg: "Password has successfully reset" });
                    })
                    .catch((err) => res.status(409).json({ error: "Not able to reset the password" }));
            }
        });
    }
};