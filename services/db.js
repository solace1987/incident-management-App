const mongoose= require('mongoose');
const config= require('../config/config')

class Database{

    constructor(){
        this._connect()
        

    }

    _connect(){

        mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.database}`, { useNewUrlParser: true, useCreateIndex: true ,useFindAndModify: false,useUnifiedTopology: true  }) 
        .then(()=>{
            console.log('Database connection successful')
        })

        .catch(err=>{

            console.error('Database connection error')
        })
    }
}

module.exports=new Database();