// Loading Packages
const jwt = require('jsonwebtoken');
const momentjs = require('moment');
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const sgTransport = require("nodemailer-sendgrid-transport");

const {
    SECRET,
    SENDGRID_USERNAME,
    SENDGRID_PASSWORD
} = process.env;

const coreHelper = (() => {

    const generateToken = (data) => {
        const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data
            },
            SECRET
        );
        return token;
    };

    const generateUrl = (url, params) => {
        let endpoint = url;

        if (!url.includes('?')) {
            endpoint = url + '?';
        }

        for (let key in params) {
            endpoint = `${endpoint}${key}=${params[key]}&`;
        }

        return endpoint.slice(0, -1);

    };

    const setCookie = (res, user) => {
        const token = generateToken(user); // token
        res.cookie('token', token);
    };

    const hashPassword = (password, num) => {
        const salt = bcrypt.genSaltSync(num);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    };

    const mailing = () => {
        const options = {
            auth: {
                api_user: SENDGRID_USERNAME,
                api_key: SENDGRID_PASSWORD
            }
        };
        const client = nodemailer.createTransport(sgTransport(options));
        return client;
    };

    const sendMail = (message, res, next) => {
        const client = mailing();
        client.sendMail(message, (err, info) => {
            if (err) {
                const message = 'User created, but not able to send email, Please try to log in';
                next({
                    error: 'Not able to send a welcome email',
                    statusCode: 500,
                    errorMessage: message
                });
            } else {
                next({
                    message: 'Email sent!',
                    statusCode: 200
                });
            }
        });
    };

    // Features
    return {
        generateToken,
        sendMail,
        hashPassword,
        setCookie,
        generateUrl
    };
})();


module.exports = coreHelper;