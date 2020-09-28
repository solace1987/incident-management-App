const UserModel = require("../models/users");
const record=require('../controller/data');

const saveUser= (info)=>{
    
   const newUser=new record(UserModel,info)

    newUser.save();

}

 const fetchUser=  (item)=>{

    const data= new record(UserModel,item)
     data.find();
}

const fetchandUpdate= ((item,update)=>{

    const data= new record(UserModel,item,update)
    data.findAndUpdate()
})

const fetchandRemove= (item)=>{

    const data= new record(UserModel,item)
    data.findAndDelete()
}


module.exports={saveUser:saveUser,fetchUser:fetchUser,fetchandUpdate:fetchandUpdate,fetchandRemove:fetchandRemove}