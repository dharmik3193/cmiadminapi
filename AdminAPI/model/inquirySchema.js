const mongoose = require('mongoose');

var inquirySchema = new mongoose.Schema({
     name:{
        type:String
     },
     education:{
        type:String
     },
     address:{
        type:String
     },
     mobile1:{
        type:String
     },
     mobile2:{
        type:String
     },
     course:{
        type:String
     },
     reference:{
        type:String
     },
     inquiry:{
        type:String
     },
     status:{
        type:String
     },
     fees:{
        type:String
     },
     note:{
        type:String
     }
})

var inquirymodel = mongoose.model("inquiry", inquirySchema);

module.exports = inquirymodel;