const expressMiddleware = require('./expressMiddeware');
const mongooseMiddleware = require('./mongooseMiddleware');

const {
    verifyCookie
} = expressMiddleware;

module.exports = {
    verifyCookie,
};