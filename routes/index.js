var express = require('express');
var router = express.Router();
var shared=require('./shared');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var prodName="Shoe";
  var uid="AMAN";
  var obj={
      prodName:prodName,
      Likeuid:uid  
  }
  shared.getMongoCon(res,function(db){
      var collection=db.collection('feedbacks');
      collection.update({ prodName:prodName},obj, { upsert: true } ,function(e,r){
          if(e){
             // res.send(e);
          }else{
             // res.send(r);
          }
      }) 
  })


});

module.exports = router;