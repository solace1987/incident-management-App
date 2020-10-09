const express = require("express");
const router = express.Router();
const incidentModel = require("../../models/incident");

router.post("/", (req, res) => {
  //console.log(req.body)
  const incident = new incidentModel(req.body);
  incident
    .save()
    .then((result) => {
      //res.render('dashbord', {msg:"your issue has been reported"})
      res.end;
    })
    .catch((err) => {
      console.log(err);
    });
  //res.send('List of incidents');
});

router.get("/", (req, res) => {
    console.log(req.query.q)
   if(req.query.q=="all"){
  incidentModel.find().then((result) => {
   //console.log(result);
    res.render("adminDash",{result});
  });
   }
     
   else{
    let incidenID = req.query.q;
    incidentModel.find({ _id: incidenID }).then((result) => {
        console.log(result[0])
      res.render("incidentedit", result[0]);
    }).catch((err)=>{
        console.log(err)
    });
   }
});

module.exports = router;
