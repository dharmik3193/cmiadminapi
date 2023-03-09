var express = require('express');
const admissionmodel = require('../model/admissionSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_student', async (req, res) => {
  var data = await admissionmodel.create(req.body);
  res.json(data)
})

module.exports = router;
