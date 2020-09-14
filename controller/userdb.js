const mongoose = require('mongoose')
const UserModel = require("../models/users");
const record=require('../controller/data');

const saveUser= (info)=>{
    
   const newUser=new record(UserModel,info)

    newUser.save();

}

const fetchUser= (item)=>{

    const data= new record(UserModel,item)
    data.find();
}


module.exports={saveUser:saveUser,fetchUser:fetchUser}