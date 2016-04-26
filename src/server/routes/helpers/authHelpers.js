authHelpers = {

  // generate a token
  generateToken: function(user) { 
                   var payload = { exp: moment().add(14, 'days').unix(),
                                   iat: moment().unix(),
                                   sub: user._id };
  
                   return jwt.encode(payload, config.TOKEN_SECRET);

  },


  // Ensure authenticated
  ensureAuthenticated: function(req, res, next) {
  
                         // check headers for the presence of an auth object
                         if(!(req.headers && req.headers.authorization)) { 
                           return res.status(400).json({ status: 'fail',
                                                         message: 'No header present or no authorization header.' });
                         }
  
                         // Decode the token
                         var header = req.headers.authorization.split(' ');
                         var token = header[1];
                         var payload = jwt.decode(token, config.TOKEN_SECRET);
                         var now = moment().unix();
                        
                        // Ensure that the token is valid
                        if(now > payload.exp || payload.iat > now) {
                          return res.status(401).json({ status: 'fail',
                                                        message: 'Token is invalid'
                                                      });
                        }
                        
                        // Ensure that the user is still in the database
                        User.findById(payload.sub, function(err, user) {
                          if(err) { return next(err); }
                          if(!user) { return res.status(400).json({ status: 'fail',
                                                                    message: 'User does not exist' });
                          }
                          
                          // attach user to request object
                          req.user = user;
                          
                          // call next middleware function
                          next();
                        
                        });
  }

}

module.exports = authHelpers;