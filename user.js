const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username:String,
  email:Number,
  password:String
});

module.exports = mongoose.model('User', UserSchema);
