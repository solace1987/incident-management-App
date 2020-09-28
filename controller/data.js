


class Data{

    constructor(model,info,update){
        this.model=model;
        this.dataModel=new model(info);
        this.info=info;
        this.update=update;
    }

   

    save(){
        this.dataModel.save()
        .then((doc)=>{
            console.log(doc)
        })
        .catch((error)=>{
            console.error(err)
        })

    };

    async find(){

        await this.model.find(this.info)
        .then( (doc)=>{
            return doc
        })
        .catch(err=>{
            console.error(err)
        })
    }

    findAndUpdate(){
    
        this.model.findOneAndUpdate(this.info,this.update)
        .then(doc=>{
            console.log(doc)
        }).catch(err=>console.log(err))
    
    }
    findAndDelete(){
    
        this.model.findOneAndRemove(this.info)
        .then(doc=>{
            console.log(doc)
        }).catch(err=>console.log(err))
    
    }
}


/**class findData{
    constructor(model,searchQuery){
        this.model=model
        this.searchQuery=searchQuery;
        this.find();
    }
    find(){
        this.model.find(this.searchQuery)
        .then(doc=>{
            console.log(doc);
        })
        .catch(err=>{
            console.log(err)
        })

    }
}
**/


module.exports= Data