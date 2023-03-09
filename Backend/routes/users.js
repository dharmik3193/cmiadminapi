var express = require('express');
const usermodel = require('../model/userSchema');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/register', async function (req, res, next) {

  var encrypted_pass = await bcrypt.hash(req.body.password, 10);

  var body_data = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: encrypted_pass,
    role: req.body.role,
    isactive: req.body.isactive
  }
  var data = await usermodel.create(body_data);
  res.json(data)
});

router.post('/login', async (req, res) => {
  var data = await usermodel.find({ email: req.body.email })
  var [data] = data;
  if (data) {
    var password = await bcrypt.compare(req.body.password, data.password);
    if (password) {
      res.json({
        user_name: data.user_name,
        role: data.role,
        isactive: data.isactive,
        isloggedin:true
      })
    }else{
      res.json(
        {
          isloggedin:false
        }
      )
    }
  }else{
    res.json({
      isloggedin:false
    })
  }
})

module.exports = router;
