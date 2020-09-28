const express= require('express');
const router=express.Router();
const incidentModel = require("../../models/incident");

router.post('/',(req,res)=>{
//console.log(req.body)
const incident= new incidentModel(req.body)
incident.save()
.then(result=>{
    res.render('dashbord', {msg:"your issue has been reported"})
})
.catch(err=>{
    console.log(err)
})
//res.send('List of incidents');

})


module.exports=router;