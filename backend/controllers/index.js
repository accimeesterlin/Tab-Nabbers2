const authentication = require('./authentication');
const eventBrite = require('./eventBrite');
const profile = require('./profile');


module.exports = {
    signin: authentication.signin,
    signup: authentication.signup,
    authenticateWithService: authentication.authenticateWithService,
    searchEventsByLocation: eventBrite.searchEventsByLocation,
    saveEventToFavorite: eventBrite.saveEventToFavorite,
    fetchProfile: profile.fetchProfile
};