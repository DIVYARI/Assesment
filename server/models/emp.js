var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var emp=new Schema({
wave:String,
name:String,
email:String,
phone:String,
giturl:String,
empcode:String,
empdep:String,
empdesig:String,
skill:String,
exp:String
});
module.exports=mongoose.model('empl',emp);
