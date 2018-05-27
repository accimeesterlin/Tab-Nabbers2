const {
  environment
} = require('./environment.json');

const generateEndpoint = (config) => {
  let endpoints = {};

  if (environment) {
    endpoints = config[environment];
  }

  endpoints = {
    ...endpoints,
    ...config['external_api']
  };

  return endpoints;
};

const devEndpoint = 'http://bootcruitphase2.herokuapp.com';
const qaEndpoint = ''; // TODO
const prodEndpoint = ''; // TODO

// List of all our API's - local, dev, qa, and prod
const config = {
  dev: {
    signin_url: `${devEndpoint}/secure/signin`,
    signup_url: `${devEndpoint}/secure/signup`,
    get_events: `${devEndpoint}/secure/eventbrite/search?`
  },

  local: {
    signin_url: "/secure/signin",
    signup_url: "/secure/signup",
    get_events: `/secure/eventbrite/search?`
  },

  qa: {
    signin_url: `${qaEndpoint}`,
    signup_url: `${prodEndpoint}`,
    get_events: `${devEndpoint}/secure/eventbrite/search?`
  },

  external_api: {
    github_endpoint: 'https://api.github.com',
    event_brite_enpoint: ''
  },

  prod_endpoint: {}
};

const endpoint = generateEndpoint(config);

module.exports = endpoint;