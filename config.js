const serverConfig = (() => {
    const log = console.log;
    const error = console.error;
    const port = process.env.PORT || 8080;

    let runServer = (app) => {
        return new Promise((resolve, reject) => {
            app.listen(port, () => {
                    resolve(`Your app is listening on port ${port}`);
                })
                .on('error', err => {
                    reject(err);
                });
        });
    };

    // Features
    return {
        start: runServer
    };
})();



module.exports = serverConfig;