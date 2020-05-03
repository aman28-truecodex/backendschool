var mongo=require('mongodb');

var sharedObj={};

sharedObj.getMongoCon=function(res,cb){
    var mongoClient=mongo.MongoClient;
    var url="mongodb+srv://aman:90singh91@cluster0-x1vml.mongodb.net/test?retryWrites=true&w=majority";
    mongoClient.connect(url,function(err,cluster){
        console.log(cluster);
        if(err){
            res.send('db conn error');
        }
        var db=cluster.db('aman_admin');
        cb(db);
    })
}

/*sharedObj.getMysqlCon=function(){

}*/

module.exports=sharedObj;