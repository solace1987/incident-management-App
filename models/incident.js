const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
 
    date: {type: Date, default: Date.now,String},
    username: { type: String, required: true },
    discriptionUser: { type: String, required: true },
    dept:{type:String},
    incidentCart: { type: String},
    discription:{ type: String},
    remark: { type: Array},
    status:{ type: String, default:'OPEN'},
    userId:{type:String,required: true },
  
});

incidentSchema.index({username:1})

module.exports = mongoose.model('incident', incidentSchema);
