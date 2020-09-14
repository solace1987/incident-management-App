const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
    firstname: String,
    lastname: String,
    dept: String,
    password: String,
    email: String,
  
});

module.exports = mongoose.model('user', userSchema);
