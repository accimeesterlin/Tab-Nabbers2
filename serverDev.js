var express = require('express'),
    secret = require("./back/config/secrets"),
    path = require("path"),
    webpack = require("webpack"),
    open = require("open");

var config = require("./webpack.config");

var app = express(),
    PORT = process.env.PORT || 3000;

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// // Static directory
app.use(express.static(path.join(__dirname + "/front/public")));

app.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, '/front/public/index.html'));

});


app.listen(PORT, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log("Database started fine!!!");

});

open(`http://localhost:${PORT}`);
