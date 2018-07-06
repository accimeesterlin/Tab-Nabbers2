const coreHelper = require('../utils/coreHelper');
require('dotenv').config();
const {
    GOOGLE_AUTH2_AUTHORIZE_ENDPOINT,
    GOOGLE_AUTH2_TOKEN_ENDPOINT,
    GOOGLE_CLIENT_ID,
    GOOGLE_SECRET_ID,
    GOOGLE_REDIRECT_URL,
    GOOGLE_SCOPE,
    GITHUB_AUTHORIZE_ENDPOINT,
    GITHUB_TOKEN_ENDPOINT,
    GITHUB_CLIENT_ID,
    GITHUB_SECRET_ID,
    GITHUB_REDIRECT_URL,
    GITHUB_SCOPE,
    EVENTBRITE_CLIENT_ID,
    EVENTBRITE_CLIENT_SECRET,
    EVENT_BRITE_AUTHORIZE_ENDPOINT,
    EVENTBRITE_KEY,
} = process.env;


const auth2 = (() => {

    const auth2Object = (id, scope, redirect_uri) => {
        return {
            client_id: id,
            scope,
            redirect_uri
        };
    };
    // client_id: process.env.EVENTBRITE_CLIENT_ID,
    // client_secret: process.env.EVENTBRITE_CLIENT_SECRET,
    // grant_type: "authorization_code"

    const googleAuthObject = (type) => {
        let googleAuth = auth2Object(GOOGLE_CLIENT_ID, GOOGLE_SCOPE, GOOGLE_REDIRECT_URL);
        if (type === 'authorize') {
            googleAuth.access_type = 'offline';
            googleAuth.response_type = 'code';
        } else {
            googleAuth.secret = GOOGLE_SECRET_ID;
            googleAuth.grant_type = 'authorization_code';
        }
        return googleAuth;
    };

    const githubAuthObject = (type) => {
        let githubAuth = auth2Object(GITHUB_CLIENT_ID, GITHUB_SCOPE, GITHUB_REDIRECT_URL);
        if (type === 'token') {
            githubAuth.secret = GITHUB_SECRET_ID;
        }
        return githubAuth;
    };

    const eventBriteObject = () => {
        let eventBriteAuth = {
            client_id: EVENTBRITE_CLIENT_ID,
            response_type: 'code'
        };
        return eventBriteAuth;
    };

    const auth2Url = (type, service) => {
        let url;
        const googleAuthorize = googleAuthObject('authorize');
        const githubAuthorize = githubAuthObject('authorize');
        const eventBriteAuthorize = eventBriteObject();

        const googleTokenUrl = googleAuthObject('token');
        const githubTokenUrl = githubAuthObject('token');

        if (type === 'authorize') {
            switch (service) {
                case 'google':
                    url = coreHelper.generateUrl(GOOGLE_AUTH2_AUTHORIZE_ENDPOINT, googleAuthorize);
                    break;
                case 'github':
                    url = coreHelper.generateUrl(GITHUB_AUTHORIZE_ENDPOINT, githubAuthorize);
                    break;
                case 'eventbrite':
                    url = coreHelper.generateUrl(EVENT_BRITE_AUTHORIZE_ENDPOINT, eventBriteAuthorize);
                    break;
                default:
                    url = '';
                    break;
            }
        } else {
            switch (service) {
                case 'github':
                    url = coreHelper.generateUrl(GITHUB_TOKEN_ENDPOINT, githubTokenUrl);
                    break;

                case 'google':
                    url = coreHelper.generateUrl(GOOGLE_AUTH2_TOKEN_ENDPOINT, googleTokenUrl);
                    break;

                default:
                    url = '';
                    break;
            }
        }

        return url;
    };


    // Features
    return {
        auth2Url, // authorize, github
    };
})();

const result = auth2.auth2Url('authorize', 'github');

module.exports = auth2;