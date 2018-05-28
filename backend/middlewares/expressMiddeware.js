const jwt = require('jsonwebtoken');

const expressMiddleware = (() => {

    const verifyCookie = (req, res, next) => {
        const {
            token
        } = req.cookies;

        jwt.verify(token, process.env.SECRET, (err, decoded) => {

            if (err) {
                res.status(401).json({
                    error: "Access denied. "
                });
            } else {
                req.email = decoded.data.email;
                req.id = decoded.data._id;
                next();
            }
        });

    };

    // Features
    return {
        verifyCookie
    };
})();



module.exports = expressMiddleware;