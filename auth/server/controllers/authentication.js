const User = require("../models/user");
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email & password'});
  }

  // see if a user with a given email exists
  User.findOne({ email : email }, function(err, existingUser) {
    if (err) { return next(err) }

    // if user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'} );
    }
  })

  // if user with email does not exist, create & save user record
  const user = new User({
    email,
    password
  })

  user.save(function(err) {
    if (err) { return next(err) }

    // respond to request indicating the user was created
    res.json( { token: tokenForUser(user) } );
  });
}