const authentication = require('./authentication');
const eventBrite = require('./eventBrite');


module.exports = {
    signin: authentication.signin,
    signup: authentication.signup,
    searchEventsByLocation: eventBrite.searchEventsByLocation
};