/**
 * Created by esterlingaccime on 8/14/17.
 * Edited by Juliafin and Reynnan on 8/26/17
 */

const bcrypt = require("bcryptjs");
const _ = require("lodash");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const emailValid = [
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  "Please enter a valid email."
];
const phonenumberValid = [
  /(?=^\d{10}$)|(?=^\d{3}-\d{3}-\d{4}$)|(?=^\(\d{3}\)\d{3}-\d{4}$)/,
  "Please enter a valid phone number in the format 1234567890, 123-456-7890, or (123)456-7890"
];
const zipcodeValid = [
  /^\d{5}(?:[-\s]\d{4})?$/,
  "The zipcode must either be in the format XXXXX or XXXXX-XXXX."
];

/*
 Sub Documents for user physical address
*/
const addressSchema = Schema({

  streetAddress: {
    type: String,
    trim: true
  },

  apartment_number: Schema.Types.Mixed,

  city: {
    type: String,
    trim: true
  },

  state: {
    type: String,
    trim: true
  },

  zipcode: {
    type: String,
    match: zipcodeValid
  },

  _id: false
});

/*
    User programming Skills
*/
const skillSchema = Schema({
  skills: [{
    type: String
  }],
  category: {
    type: String
    // match: [/^Library|Framework|Language$/],
    // required: true
  }
});

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    match: emailValid,
    minlength: 1,
    required: true
  },

  username: String,
  bio: String,
  summary: String,
  position: String,

  address: addressSchema,

  looking_job: {
    type: Boolean,
    default: true
  },

  locked: {
    type: String,
    default: false
  },

  login_fail: {
    type: Number,
    default: 0
  },

  banned: {
    type: Boolean,
    default: false
  },

  favorite: [{
    type: String
  }],

  gender: {
    type: String
    // default: "",
    // match: [/M|F/]
  },

  phoneNumber: {
    type: String,
    match: phonenumberValid,
    trim: true
  },

  birthday: {
    month: String,
    day: String,
    year: String
  },

  photo: String,
  photoUrl: String,

  skills: {
    type: [skillSchema]
  },

  linkedIn: {
    url: String,
    avatar: String
  },

  portfolio_link: String,

  github: {
    access_token: String,
    expiresIn: String,
    refreshToken: String,
    scope: String,
    url: String,
    avatar: String
  },

  google: {
    accessToken: String,
    refreshToken: String,
    expiresIn: String,
    url: String,
    avatar: String
  },

  eventbrite: {
    accessToken: String,
    expiressIn: String,
    refreshToken: String,
    url: String,
    avatar: String
  },

  tokens: [{
    access: String,
    token: String
  }],

  events: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }]
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;