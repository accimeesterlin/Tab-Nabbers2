const express = require('express');
const router = express.Router();

const {
    signup,
    signin,
    searchEventsByLocation,
    saveEventToFavorite,
    authenticateWithService,
    fetchProfile
} = require('../controllers');


router.post('/signup', signup);

router.post('/signin', signin);

router.post('/save/event', saveEventToFavorite);

router.get('/eventbrite/search', searchEventsByLocation);

router.get('/authenticate/service/:name', authenticateWithService);

router.get('/profile', fetchProfile);





module.exports = router;