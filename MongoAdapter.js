class MongoAdapter{
    constructor(options){
        this.options = options || {
            url: 'mongodb://localhost/EmployeeDB',
            collectionName: "Employee"
        }
        this.mongoClient = require('mongodb').MongoClient;
        this.db = null;
    }

    // connection to database
    connect(){
        var currentObj = this;
        this.connectPromise = this.mongoClient.connect(this.options.url)
        .then(function (db) { // <- db as first argument
            //console.log(db)
            currentObj.db = db;
        })
        .catch(function (err) {
            console.log(err)
        })
        //console.log(this.connectPromise);
        return this.connectPromise
    }

    getConnection(){
        if(this.connectPromise){
            return this.connectPromise
        } else {
            return this.connect()
        }
    }

    close(){
        //this.db.close;
    }

    save(toBeSavedJson){
        console.log("Inside save of adapter");
        var currentObj = this;
        return this.getConnection()
        .then(function(){
            var collection = currentObj.db.collection(currentObj.options.collectionName);
            //return currentObj.db.insert(currentObj.options.collectionName, toBeSavedJson)
            return collection.insert(toBeSavedJson);
        })
    }

    update(toBeSavedJson){
        console.log("Inside update of adapter");
        var currentObj = this;
        return this.getConnection()
        .then(function(){
            var ObjectId = require('mongodb').ObjectId;
            var collection = currentObj.db.collection(currentObj.options.collectionName);
            //return currentObj.db.insert(currentObj.options.collectionName, toBeSavedJson)
            return collection.updateOne({'_id':ObjectId(toBeSavedJson._id)} ,{$set: toBeSavedJson});
        })
    }
}

module.exports = MongoAdapter;