/**
 * Created by esterlingaccime on 8/14/17.
 * Edited by Juliafin and Reynnan on 8/26/17
 */

const bcrypt = require("bcryptjs");
const _ = require('lodash');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const emailValid = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email.'];
const phonenumberValid = [/(?=^\d{10}$)|(?=^\d{3}-\d{3}-\d{4}$)|(?=^\(\d{3}\)\d{3}-\d{4}$)/, 'Please enter a valid phone number in the format 1234567890, 123-456-7890, or (123)456-7890'];
const zipcodeValid = [/^\d{5}(?:[-\s]\d{4})?$/, 'The zipcode must either be in the format XXXXX or XXXXX-XXXX.'];


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
        type: String
    },
    zipcode: {
        type: String,
        match: zipcodeValid,

    },
    _id: false
});

const skillSchema = Schema({

    skillName: {
        type: String
        // required: true
    },
    category: {
        type: String
        // match: [/^Library|Framework|Language$/],
        // required: true
    },
    active: {
        type: Boolean
        // required: true
    }


});


const userSchema = Schema({

    name: {
        type: String,
        // required: true
    },

    join_since: {
        type: Date,
        default: new Date
    },


    password: {
        type: String
    },

    email: {
        type: String,
        // unique: true,
        // match: [emailValid],
        // minlength: 1
    },

    locked: {
        type: String,
        default: false
    },

    login_fail: {
        type: Number,
        default: 0
    },

    username: {
        type: String
    },


    favorite: [{ type: String }],

    firstName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        trim: true
    },


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
    address: addressSchema,

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

    profiles: {
        github: {
            type: String,
            default: ""
        },
        linkedIn: {
            type: String,
            default: ""
        },
        website: {
            type: String,
            default: ""
        }
    },


    bio: String,


    skills: {
        type: [skillSchema],

    },

    jobStatus: {
        type: String,
        default: ""
    },

    jobTitle: {
        type: String,
        default: ""
    },

    github: {
        access_token: { type: String },
        expires_in: { type: String },
        refresh_token: { type: String },
        scope:{type: String}
    },
    twitter: {
        access_token: { type: String },
        expires_in: { type: String },
        refresh_token: { type: String }
    },
    google: {
        access_token: { type: String },
        refresh_token: { type: String },
        expires_in: { type: String }
    },

    eventbrite: {
        access_token: { type: String },
        expires_in: { type: String },
        refresh_token: { type: String }
    },

    tokens: [{
        access: {
            type: String,
        },

        token: {
            type: String
        }
    }],

    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]

});


userSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({ _id: user._id.toHexString(), access: access }, 'ilovejson').toString();
    user.tokens.push({ access, token });
    user.save().then(() => { return token });
};

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;