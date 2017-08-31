const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open"),
    passport = require("passport"),
    mongoose = require('mongoose'),
    {TEST_DATABASE_URL} = require('./back/config/mongo'),
    User = require('./back/models/user'),
    {generateUsers} = require('./back/models/seedUser');
  

    mongoose.Promise = global.Promise;

mongoose.connect(TEST_DATABASE_URL.url);






const config = require("./webpack.config");


require('./back/passport')(passport);

const app = express(),
    PORT = process.env.PORT || 8080;


const router = express.Router();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// // Static directory
app.use(express.static(path.join(__dirname + "/front/public")));

//For BodyParser
app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./back/passport")(passport);

app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


require("./back/routes/authenticate")(app, passport);
require("./back/routes/html")(app, path);

let server;

let runServer = ( (port=PORT) => {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      
      resolve(server);
      
    })
      .on('error', err => {
        console.log('Server errored, mongoose disconnecting.');
        reject(err);
      });
  });
    
});

const db = mongoose.connection;
runServer()
  .then( () => {
    console.log('server running');

    db.once("open", function () {
      console.log("Mongoose connection successful!!!");
      return User
        .count()
        .then( (count) => {
          console.log(`The count is ${count}`);
          if (count < 5){
              console.log('Writing dummy data to the db');
              return User
                  .create(generateUsers(5))
          }

        })
        .catch(err => console.log(err))
      console.log(generateUsers(5));

    });

  })
  .catch( (err) => {
    console.log('server not running', err);
    db.on("error", function (err) {
      console.log("Mongoose Error: ", err);
    });
  });

