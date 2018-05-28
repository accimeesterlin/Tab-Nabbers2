const express = require('express');
const router = express.Router();

const {
    signup,
    signin,
    searchEventsByLocation
} = require('../controllers');


router.post('/signup', signup);

router.post('/signin', signin);

router.get('/eventbrite/search', searchEventsByLocation);



module.exports = router;