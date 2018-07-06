const User = require('../models/user');

const profile = (() => {

    const fetchProfile = async (req, res, next) => {
        try {
            const userId = req.query.q || req.userId;
            const user = await User.findOne({
                    _id: userId
                })
                .select('-password -tokens');

            next({
                statusCode: 200,
                user
            });

        } catch (error) {
            next({
                statusCode: 501,
                error: error.message
            });
        }
    };

    return {
        fetchProfile
    };
})();

module.exports = profile;