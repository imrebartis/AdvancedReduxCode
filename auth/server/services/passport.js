const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify the username & password, call done with the user
  // if username & password correct,
  // otherwise call done with false
});

// set up options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if the usr id exists in the db

  // if it does, call done with the user object

  // otherwise call done without the user object
  User.findById(payload.sub, function(err, user){
    if (err) { return done(err, false) };

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
});

// tell passport to use the strategy
passport.use(jwtLogin);