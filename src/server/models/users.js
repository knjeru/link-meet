var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var config = require('../../_config');


var UserSchema = new Schema({
  
  username: {
    type: String,
    required: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  password: {
    type: String,
    required: true
  },
  
  groups : [{ name:     { type: String, 
                          required: true },

              url:      { type: String, 
                          required: true },
                          
              photoUrl: { type: String, 
                          required: true }
           }]
});

var User = mongoose.model('user', UserSchema);


module.exports = User;