const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dept: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
  
});

userSchema.index({email:1})

module.exports = mongoose.model('user', userSchema);
