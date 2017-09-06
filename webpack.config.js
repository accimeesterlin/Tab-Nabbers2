const webpack = require('webpack');

const path = require("path");


module.exports = {
    // This is the entry point or start of our react applicaton
    entry:[
        "eventsource-polyfill",
        "webpack-hot-middleware/client?reload=true",
        "./front/index.js"
    ],

    target:'web',
    devServer: {
      contentBase: path.resolve(__dirname, 'front')
    },

    // The plain compiled JavaScript will be output into this file
    output: {
        path: path.join(__dirname, 'front'),
        filename:'bundle.js',
        publicPath: "/public/"
    },


    // This section desribes the transformations we will perform
    module: {


        loaders: [
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: path.join(__dirname, 'front'),
                loader:['react-hot-loader', 'babel-loader']

            },

            {
                test: /\.scss$/,
               loaders:'style-loader!css-loader!sass-loader'
                // loader:['style-loader', 'css-loader', 'sass-loader']

            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // do something
        }),
        new webpack.HotModuleReplacementPlugin()
    ],


    // This lets us qe our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "eval-source-map"
};
