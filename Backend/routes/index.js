var express = require('express');
const admissionmodel = require('../model/admissionSchema');
const coursemodel = require('../model/courseSchema');
const inquirymodel = require('../model/inquirySchema');
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
    res.json(data);
})

router.get('/get_student/:id', async (req, res) => {
  var data = await admissionmodel.findById(req.params.id);
  var course = await coursemodel.findOne({course_name:data.course})

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

  res.json(data)

})

router.post('/add_inquiry', async (req, res) => {
  var data = await inquirymodel.create(req.body);
  res.json(data)
})

router.get('/get_inquiry', async (req, res) => {
  var data = await inquirymodel.find();
    res.json(data);

})

module.exports = router;
