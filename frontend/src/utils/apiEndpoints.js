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
    ...config['external']
  };
  return endpoints;
};

const devEndpoint = 'http://bootcruitphase2.herokuapp.com';
const qaEndpoint = 'http://bootcruitphase2.herokuapp.com';
const prodEndpoint = 'http://bootcruitphase2.herokuapp.com';

// List of all our API's - local, dev, qa, and prod
const config = {
  dev: {
    signin: `${devEndpoint}/signin`,
    signup: `${devEndpoint}/signup`,
    events: `${devEndpoint}/eventbrite/search?`
  },

  local: {
    signin: "http://localhost:3000/signin",
    signup: "http://localhost:3000/signup",
    events: `http://localhost:3000/eventbrite/search?`
  },

  qa: {
    signin: `${qaEndpoint}`,
    signup: `${prodEndpoint}`,
    events: `${devEndpoint}/eventbrite/search?`
  },

  external: {
    github: 'https://api.github.com'
  },

  prod: {}
};

const endpoint = generateEndpoint(config);

module.exports = endpoint;