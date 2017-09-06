const path = require("path");
const axios = require('axios');

const key = require("./../config/key");

const meetupApi = 'https://api.meetup.com/find/events?text=JavaScript&key=' + key.meetup.key;


module.exports = function (app, path) {

  // app.use()

  app.get('/meetup/api', (req, res) => {
    // console.log('Client to server meetup call succeeded. Now contacting the API...');

    return axios.get(meetupApi)
      .then((meetupData) => {
        console.log('Data:', meetupData);
        res.json({data: meetupData.data});
      })
      .catch((err) => console.log('Axios to meetup failed: ', err));





  })

}