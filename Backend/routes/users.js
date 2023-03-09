var express = require('express');
const usermodel = require('../model/userSchema');
var router = express.Router();

/* GET users listing. */
router.post('/add_user', function(req, res, next) {
    var data = usermodel.create(req.body);
    res.json(data)
});

module.exports = router;
