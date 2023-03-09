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
     course_content:{
          type:String
     },
     mobile1:{
          type:String
     },
     mobile2:{
          type:String
     },
     start_date:{
          type:String
     },
     end_date:{
          type:String
     },
     duration:{
          type:String
     }
})

var admissionmodel = mongoose.model("studentdata", admissionSchema);

module.exports = admissionmodel;