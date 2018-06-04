// Loading Packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const axios = require('axios');

// Loading external files
const User = require('../models/user');
const coreHelper = require('../utils/coreHelper');
const templates = require('../utils/templates');
const auth2 = require('./auth2');

const {
  SECRET
} = process.env;


// Module Design Patterns
const authentication = (() => {

  const sendgridEmail = (email, subject) => {
    return {
      from: "awesome@bar.com",
      to: `${email}, esterlinaccime@gmail.com`,
      subject,
      text: "Not able to display message",
      html: templates.welcomeMessage
    };
  };

  const saveUser = (res, user, next) => {
    const subject = 'Welcome to Tab Nabbers';
    const message = sendgridEmail(user.email, subject);
    user.save((error) => {
      if (error) {
        next({
          errorMessage: 'User already exist, try to login',
          status: 'rejected',
          statusCode: 500,
          message: error.message
        });
      } else {
        coreHelper.setCookie(res, user);
        coreHelper.sendMail(message, res, next);
      }
    });
  };

  const comparePassword = (password, user, next, res) => {
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (isPasswordValid) {
      coreHelper.setCookie(res, user);
      next({
        statusCode: 200,
        status: 'success'
      });

    } else {
      next({
        statusCode: 500,
        error: 'Credentials are not valid',
        errorMessage: 'wrong email or password. Please try again'
      })
    }
  };

  const signup = (req, res, next) => {
    const {
      email,
      name,
      password
    } = req.body;

    const newUser = new User({
      email,
      password: coreHelper.hashPassword(password, 10),
      name
    });

    saveUser(res, newUser, next);
  };

  const signin = async (req, res, next) => {
    try {
      const {
        email,
        password
      } = req.body;

      const user = await User.findOne({
        email
      });

      comparePassword(password, user, next, res);
    } catch (error) {
      next({
        errorMessage: error.message,
        error: 'Error Login, user not found',
        statusCode: 500,
        status: 'rejected'
      });
    }
  };

  const authenticateWithService = (req, res, next) => {
    const serviceName = req.params.name;
    const url = auth2.auth2Url('authorize', serviceName)

    next({
      url,
      status: 'success',
      statusCode: 200,
      service: serviceName
    });
  };

  const obtainAccessToken = (req, res, next) => {
    // TODO
  };

  // Features 
  return {
    signup,
    signin,
    authenticateWithService
  };
})();

module.exports = authentication;