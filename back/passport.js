const User = require("./models/user"),
    key = require("./config/key");

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    LinkedInStrategy = require('passport-linkedin').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    LocalStrategy = require("passport-local").Strategy;



module.exports = (passport) => {

// used to serialize the user for the session
    passport.serializeUser(function(user, done) {

        done(null, user.id);

    });

// used to deserialize the user
    passport.deserializeUser(function(id, done) {

        User.findById(id, function(err, user) {

            done(err, user);

        });
    });


    passport.use('local-signup', new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
        passReqToCallback:true
    }, function (req, email, password, done) {

        console.log(email, password);
        process.nextTick(function () {

            User.findOne({'local.email':email}, function (err, user) {
                if(err){
                    return done(err);
                }

                if(user){
                    return done(null, false, 'Email already existed');
                } else{
                    var newUser = new User();

                    newUser.loginData.local.email = email;
                    newUser.loginData.local.password = newUser.generateHash(password);
                    //newUser.isNew = false;

                    console.log(newUser);

                    newUser.save(function(err, data) {
                        if(err)
                            throw err;

                        return done(null, data);
                    });
                }
            });
        })
    }));


    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, function (req, email, password, done) {

        console.log(email, password);

        User.findOne({ 'local.email' :  email }, function (err, user) {

            if(err)
                return done(err);

            if(!user)
                return done(null, false, 'Sorry bad, today is not your day, try again');
            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, 'Password does not match'); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);

        });
    }));






    passport.use(new GoogleStrategy({
            clientID: key.gooogle.client_Id,
            clientSecret: key.gooogle.client_secret,
            callbackURL: "http://localhost:8080/auth/google/callback",

        },
        function(token, refreshToken, profile, done) {

            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(function() {

                // try to find the user based on their google id
                User.findOne({ 'google.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        // if a user is found, log them in
                        return done(null, user);

                    } else {
                        // if the user isnt in our database, create a new user
                        var newUser          = new User();

                        // set all of the relevant information
                        newUser.loginData.google.id    = profile.id;
                        newUser.loginData.google.token = token;
                        newUser.loginData.google.name  = profile.displayName;
                        // newUser.google.email = profile.emails[0].value; // pull the first email

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            });

            console.log(profile);
        }));









    passport.use(new TwitterStrategy({
            consumerKey: key.twitter.consurmer_key,
            consumerSecret: key.twitter.consumer_secret,
            callbackURL: "http://localhost:8080/auth/twitter/callback",
            passReqToCallback : true
        },
        function(req, token, tokenSecret, profile, done) {

            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Twitter
            process.nextTick(function() {

                User.findOne({ 'twitter.id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser                 = new User();

                        // set all of the user data that we need
                        newUser.loginData.twitter.id          = profile.id;
                        newUser.loginData.twitter.token       = token;
                        newUser.loginData.twitter.username    = profile.username;
                        newUser.loginData.twitter.displayName = profile.displayName;

                        // save our user into the database
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            });

        }
    ));





    passport.use(new LinkedInStrategy({
            consumerKey: key.linkedin.client_id,
            consumerSecret: key.linkedin.client_secret,
            callbackURL: "http://localhost:8080/auth/linkedin/callback"
        },
        function(token, tokenSecret, profile, done) {

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id
                User.findOne({ 'linkedin.id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser            = new User();

                        // set all of the facebook information in our user model
                        newUser.loginData.linkedin.id    = profile.id; // set the users facebook id
                        newUser.loginData.linkedin.token = token; // we will save the token that facebook provides to the user
                        newUser.loginData.linkedin.name  = profile.displayName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        newUser.save(function(err) {
                            if (err)
                                throw err;

                            // if successful, return the new user
                            return done(null, newUser);
                        });
                    }

                });
            });

            console.log(profile, tokenSecret, token);
        }
    ));








    passport.use(new FacebookStrategy({
            clientID: key.facebook.client_id,
            clientSecret: key.facebook.client_secret,
            callbackURL: "http://localhost:8080/auth/facebook/callback"
        },
        // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

        console.log(profile);

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id
                User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser            = new User();

                        // set all of the facebook information in our user model
                        newUser.facebook.id    = profile.id; // set the users facebook id
                        newUser.facebook.token = token; // we will save the token that facebook provides to the user
                        newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        newUser.save(function(err) {
                            if (err)
                                throw err;

                            // if successful, return the new user
                            return done(null, newUser);
                        });
                    }

                });
            });

        }));


};