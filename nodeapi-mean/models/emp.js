const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
});

module.exports=mongoose.model('Employee',employeeSchema);