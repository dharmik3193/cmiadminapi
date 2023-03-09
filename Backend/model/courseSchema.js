const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
     course_name:{
        type:String
     },
     course_content:{
        type:String
     },
     course_duration:{
        type:String
     }
})

var coursemodel = mongoose.model("course", courseSchema);

module.exports = coursemodel;