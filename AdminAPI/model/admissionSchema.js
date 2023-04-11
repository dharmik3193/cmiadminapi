const mongoose = require('mongoose');

var admissionSchema = new mongoose.Schema({
     r_no: {
          type: String
     },
     student_name: {
          type: String
     },
     course:{
          type:String
     },
     dob:{
          type:String
     },
     qualification:{
          type:String
     },
     mobile1:{
          type:String
     },
     mobile2:{
          type:String
     },
     address:{
          type:String
     },
     batch:{
          type:String
     },
     start_date:{
          type:String
     },
     end_date:{
          type:String
     },
     laptop:{
          type:String
     },
     job:{
          type:String
     },
     reference:{
          type:String
     },
     fees:{
          type:String
     },
     emi:{
          type:Array
     }
})

var admissionmodel = mongoose.model("studentdata", admissionSchema);

module.exports = admissionmodel;