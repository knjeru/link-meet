var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request-promise');

// *** Require Helpers *** //
var authHelpers = require('./helpers/authHelpers')

// *** Require MongoDB *** //
var User = require('../models/users');
var config = require('../../_config');


// Register a new user
router.post('/register', function(req, res, next) {
  
  // ensure the user does not already exist
  User.findOne( {email: req.body.email} )
  
  .then(function (existingUser) {
    // Return an error message if the email address already exists
    if (existingUser) { return res.status(409).json({ status: 'fail',
                                                      message: 'Email already exists' });
    }
    
    // If the email address does not exist, add the user to the database
    // req.body should contain {email, username and password}
    var newUser = new User (req.body);
    
    newUser.save(function () {
      // create a jwt token
      var token = authHelpers.generateToken(newUser);
      
      // Send a 'success' status code and message when a new user is added
      res.status(200).json({ status: 'success',
                             data: { token: token,
                                     user: newUser.email }
                          });
    });
  
  })
  
  // Return an error if necessary
  .catch(function (err) { return next(err); });

});


// Login an exisiting user
router.post('/login', function (req, res, next) {
  
  // Check for the user using their email address
  User.findOne({email: req.body.email})
  
  
  .then(function (user) {
    if (!user) { return res.status(401).json({ status: 'fail',
                                               message: 'Email does not exist' });
    } else
      user.comparePassword(req.body.password, function (err, match) {
        if (err) { return next(err); }
        if (!match) { return res.status(401).json({ status: 'fail',
                                                    message: 'Password is not correct' });
        }
      
      user = user.toObject();
      
      // delete user.password;
      var token = authHelpers.generateToken(user);
      res.status(200).json({ status: 'success',
                             data: { token: token,
                                     user: user.email }
      });
    
    });
  
  })
  
  // Return an error if necessary
  .catch(function (err) { return next(err); });

});


module.exports = router;
