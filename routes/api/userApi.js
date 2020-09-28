const express = require("express");
const userModel = require("../../models/users");
const router = express.Router();

router.get("/", (req, res) => {
  let userDetail;
  userModel.find({ email: req.query.q.toLowerCase() }).then((doc) => {
    userDetail = doc[0];
    
    if (userDetail==undefined) {
      res.render("signup");
    } else {
      res.render("login", userDetail);
    }
  });

  //
});

router.post("/", (req, res) => {
  // let userpass=req.body;
  let userEmail = req.body.email.slice(0, -1);
  let userPassword = req.body.password;
  userModel.find({ email: userEmail }).then((doc) => {
    userDetail = doc[0];
    if (userPassword == userDetail.password) {
      res.render("dashbord", userDetail);
    } else {
    }
  });

  //console.log("done?");
});

router.post("/new",(req,res)=>{
  const newUser=userModel(req.body);
  newUser.save()
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})
})

module.exports = router;
