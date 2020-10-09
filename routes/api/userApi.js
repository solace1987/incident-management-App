const express = require("express");
const userModel = require("../../models/users");
const router = express.Router();
const incidentModel = require("../../models/incident");


router.get("/", (req, res) => {
  let userDetail;
  userModel.find({ email: req.query.q.toLowerCase() }).then((doc) => {
    userDetail = doc[0];

    if (userDetail == undefined) {
      res.render("signup");
    } else {
      res.render("login", userDetail);
    }
  });

  //
});

router.post("/", (req, res) => {
  let userEmail = req.body.email.slice(0, -1);
  let userPassword = req.body.password;
  let incidentData = {
    incidentDetail: [],
    userDetail: {},
    };

  userModel.find({ email: userEmail }).then((doc) => {
    incidentData.userDetail = doc[0];
    if (userPassword == incidentData.userDetail.password) {

      if(userEmail=="oluwasholaogundipe@globalplusonline.com"){

          res.render('adminDash')

      }

      else{
      incidentModel.countDocuments(
        { userId: incidentData.userDetail._id },
        (err, count) => {
          if (err) {
            console.log(err);
          } else {
            incidentData.count=count
          }
        }
      );
      
      incidentModel
        .find({ userId: incidentData.userDetail._id })
        .then((result) => {
          incidentData.incidentDetail = result.reverse();
         
          console.log(incidentData);
          res.render("dashbord", incidentData);
        });
    }} else {
    }
  });


});

router.post("/new", (req, res) => {
  const newUser = userModel(req.body);
  const newemail = req.body.email;
  console.log(newemail);
  userModel
    .find({ email: newemail })
    .then((result) => {
      console.log(result);
      if (result[0] == undefined) {
        newUser.save().then((result) => {
          res.redirect("/");
        });
      } else {
        res.send(
          "User already exist please enter your email on main page or contact admin"
        );
      }
    })

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
