var express = require('express');
const coursemodel = require('../model/courseSchema');
var router = express.Router();

router.post('/add_course',async function (req, res, next) {
    var data =await coursemodel.create(req.body);
    res.json(data)
  });

  router.get('/course',async function (req, res, next) {
    var data =await coursemodel.find();
    res.json(data)
  });

module.exports = router;