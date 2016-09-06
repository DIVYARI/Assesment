var express = require('express');
var router = express.Router();
var Emp=require('../models/emp');

/* GET home page. */
router.post('/save', function(req, res, next) {
  console.log(req.body);
  var employee=new Emp(req.body);
employee.save(function(err,data){
  if(err){
    console.log(err);
  }
  else{
  console.log("data saved");
  }
});

});


router.get('/view', function(req, res, next) {

Emp.find(function(err,data){
  if(err)
  {
    console.log(err);
  }
  else {
    res.json(data);
    console.log(data);
  }
});




  });

  // router.get('/getting', function(req, res, next) {
  // console.log(req.body.empcodecheck);
  //
  // });
  //
  //
  // });
  router.put('/getting', function(req, res, next) {
var id=req.body.empcodecheck;
    Emp.findOne({'empcode':id}, function(err, transaction) {

if(err){
  console.log(err);
}
else{
  console.log(transaction);
}

     res.json(transaction);
  });



  });


module.exports = router;
