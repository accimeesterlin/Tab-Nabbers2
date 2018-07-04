const routeHelper = (() => {
    const log = console.log;

    const success = (success, req, res, next) => {
        if (success.statusCode === 200) {
            res.json(success);
        } else {
            next(success);
        }

    };

    const error = (err, req, res, next) => {
        res.status(err.statusCode).json(err);
    };

    // Features
    return {
        error,
        success
    };
})();


module.exports = routeHelper;