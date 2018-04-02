const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/index");

const Credentials = require("../controllers/credentials");
const ThirdPartyApi = require("../controllers/thirdpartyapi");
const API = require("../controllers/api");
const integrations = require("../controllers/integrations");


const Middleware = require("../middlewares");

const {
    signin,
    signup,
    resetPassword,
    newPassword,
} = Credentials;

const {
    verifyCookie
} = Middleware;

const {
    eventbrite:{
        search
    }
} = ThirdPartyApi;


const {
    saved,
    allSaveEvents
} = API;


const {
    serviceRedirect,
    serviceToken,
    listIntegrations
} = integrations;

// Oauth 2
router.post("/authorize", serviceRedirect);
router.post("/token", verifyCookie, serviceToken);


router.get("/list/integrations",verifyCookie, listIntegrations);

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/eventbrite/search", verifyCookie, search);

router.post("/resetpassword", resetPassword);

router.post("/newpassword", newPassword);

router.post("/saved", verifyCookie, saved);

router.get("/favorites", verifyCookie, allSaveEvents);




module.exports = router;