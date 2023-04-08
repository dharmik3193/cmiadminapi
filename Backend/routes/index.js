var express = require('express');
const admissionmodel = require('../model/admissionSchema');
const coursemodel = require('../model/courseSchema');
const { isObjectIdOrHexString } = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_student', async (req, res) => {
  var data = await admissionmodel.create(req.body);
  res.json(data)
})

router.get('/get_student', async (req, res) => {
  var data = await admissionmodel.find();
  var arr = [];
  data.forEach(async (item) => {
    // console.log(item);
    var single = await coursemodel.findById(item.course)
    // console.log(single);
    var obj = {
      name: item.student_name,
      r_no: item.r_no,
      course: single.course_name,
      mobile1: item.mobile1,
      mobile2: item.mobile2,
      address: item.address,
      dob: item.dob,
      qualification: item.qualification,
      batch: item.batch,
      start_date: item.start_date,
      end_date: item.end_date,
      job: item.job,
      laptop: item.laptop,
      reference: item.reference,
      fees: item.fees,
      emi: item.emi,
      id: item._id
    }
    arr.push(obj);

  })

    res.json(arr)
    console.log(arr);

})

router.get('/get_student/:id', async (req, res) => {
  var data = await admissionmodel.findById(req.params.id);
  var course = await coursemodel.findById(data.course)
  console.log(course);

  var data = {

    name: data.student_name,
    r_no: data.r_no,
    course: course,
    mobile1: data.mobile1,
    mobile2: data.mobile2,
    address: data.address,
    dob: data.dob,
    qualification: data.qualification,
    batch: data.batch,
    start_date: data.start_date,
    end_date: data.end_date,
    job: data.job,
    laptop: data.laptop,
    reference: data.reference,
    fees: data.fees,
    emi: data.emi,
    id: data._id

  }

  console.log(data);
  res.json(data)

})

module.exports = router;
