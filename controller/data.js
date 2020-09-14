


class Data{

    constructor(model,info){
        this.model=model;
        this.dataModel=new model(info);
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

    find(){

        this.model.find()
        .then(doc=>{
            console.log(doc)
        })
        .catch(err=>{
            console.error(err)
        })
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


module.exports=Data