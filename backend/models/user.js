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
  street_address: {
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
  skills: [{ type: String }],
  category: {
    type: String
    // match: [/^Library|Framework|Language$/],
    // required: true
  }
});

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },

    password: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      match: emailValid,
      minlength: 1
    },

    username: {
      type: String
    },

    bio: String,
    summary: String,
    position: {
      type: String
    },

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

    favorite: [{ type: String }],

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
      month: {
        type: String
      },
      day: {
        type: String
      },
      year: {
        type: String
      }
    },

    photo: {
      type: String
    },

    photoUrl: {
      type: String
    },

    skills: {
      type: [skillSchema]
    },

    linkedIn: {
      url: String,
      avatar: String
    },
    portfolio_link: {
      type: String
    },

    github: {
      access_token: { type: String },
      expires_in: { type: String },
      refresh_token: { type: String },
      scope: { type: String },
      url: String,
      avatar: String
    },

    google: {
      access_token: { type: String },
      refresh_token: { type: String },
      expires_in: { type: String },
      url: String,
      avatar: String
    },

    eventbrite: {
      access_token: { type: String },
      expires_in: { type: String },
      refresh_token: { type: String },
      url: String,
      avatar: String
    },

    tokens: [
      {
        access: {
          type: String
        },

        token: {
          type: String
        }
      }
    ],

    events: [{ type: Schema.Types.ObjectId, ref: "Event" }]
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = "auth";
  let token = jwt
    .sign({ _id: user._id.toHexString(), access: access }, "ilovejson")
    .toString();
  user.tokens.push({ access, token });
  user.save().then(() => {
    return token;
  });
};

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
