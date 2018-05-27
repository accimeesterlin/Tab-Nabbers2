require('dotenv').load();

// Loading packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Loading External Files
const authenticate = require("./backend/routes/api");
const countAndCreateUser = require('./backend/db/seedUser');
const serverConfig = require('./config');


const app = express();
const log = console.log;
const error = console.error;

// Constants
const BUILD_PATH = '/frontend/build';
const INDEX_HTML = '/frontend/build/index.html';

const {
    MONGODB_URI,
    DB_URL,
    NODE_ENVIROMENT
} = process.env;

mongoose.Promise = global.Promise;

const MONGODB_URI_URL = MONGODB_URI || 'mongodb://localhost/tabnabbers' || DB_URL;
mongoose.connect(MONGODB_URI_URL);
const db = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/secure', authenticate);


if (NODE_ENVIROMENT === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname + BUILD_PATH))); // static folders

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + INDEX_HTML));
    });
}

serverConfig.start(app)
    .then((message) => {
        db.once('open', function () {
            log('Mongoose connection successful!!!');
            log(message);
            countAndCreateUser();
        });

    })
    .catch((err) => {
        log('server not running', err);
        db.on('error', function (err) {
            log('Mongoose Error: ', err);
        });
    });