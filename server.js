const express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    mongoose = require('mongoose'),
    countAndCreateUser = require('./backend/db/seedUser'),
    cookieParser = require('cookie-parser');


require('dotenv').load();

mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tabnabbers" || process.env.DB_URL;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

 

const app = express(),
    PORT = process.env.PORT || 9000;

/**
 * Configure Express Middleware
 * Such as body-parser, express-session, passport,
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());






/**
 * Bootcruit Routes
 * Authenticate, API, and Browser routes
 */



const authenticate = require("./backend/routes/api");
app.use("/secure", authenticate);


  

if (process.env.NODE_ENVIROMENT === "PRODUCTION") {
    app.use(express.static(path.join(__dirname + "/frontend/build"))) // static folders

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
    });
} else {
    console.log(`
        ====================================================
        ================ DEVELOPMENT MODE ==================
        ====================================================
    `);
}


/**
 * Server starting
 */
let server;



let runServer = ((port = PORT) => {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve(server);
        })
            .on('error', err => {
                console.log('Server error, mongoose disconnecting.');
                reject(err);
            });
    });
});




runServer()
    .then(() => {
        db.once("open", function () {
            console.log("Mongoose connection successful!!!");
            countAndCreateUser();
        });

    })
    .catch((err) => {
        console.log('server not running', err);
        db.on("error", function (err) {
            console.log("Mongoose Error: ", err);
        });
    });

