const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
     user_name:{
        type:String
     },
     email:{
        type:String
     },
     password:{
        type:String
     },
     role:{
        type:String
     },
     isactive:{
        type:Boolean
     }
})

var usermodel = mongoose.model("user", userSchema);

module.exports = usermodel;