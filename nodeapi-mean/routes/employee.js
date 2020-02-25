const express=require('express');
const router=express.Router();
const Employee=require('../models/emp')




router.get('/',async(req,res)=>{

    let employees=await Employee.find();

   try {
    res.status(200).json({
        error:false,
        data:employees
    
    })
       
   } catch (err) {
    res.status(400).json({
        error:true,
        message:"Error"
       
   })
     }

    
})
router.get('/:id',async(req,res)=>{
    let id=req.params.id;
    console.log(id);
    let doc=await Employee.findById(id);
    try {
        res.status(200).json({
            error:false,
            data:doc
        })
        
    } catch (error) {
        res.status(400).json({
            error:true,
            message:"Error"
        })
    }
    
})
router.put('/:id',async(req,res)=>{

    let id=req.params.id;
    console.log(id);
    let emp1=req.body;

    let doc1=await Employee.findByIdAndUpdate(id,emp1,{
        new:true,
        runValidators:true
    });
        if(!emp1){
            res.status(400).json({
                error:true,
                message:"Employee doesn't exist"
            })
        }
    try {
        res.status(200).json({
            error:false,
            data:doc1
        })
        
    } catch (error) {
        res.status(400).json({
            error:true,
            message:"Error"
        })
    }
    
})
router.delete('/:id',async(req,res)=>{
    let id=req.params.id;
    console.log(id);

    let del=await Employee.findByIdAndDelete(id);

   if(!del){
        res.status(404).json({
            error:true,
            message:"Id doesn't exist"
        })
    }  
    try {
        res.status(200).json({
            error:false,
            message:"deletion successful"
        })
    } catch (error) {
        res.status(400).json({
            error:true,
            message:"Error"
        })
    }

    
})
/**creating**/
router.post('/',async(req,res)=>{
    let emp=req.body;
    console.log(emp);

    let doc=await Employee.create(emp);

    try {
        res.status(200).json({
            error:false,
            data:doc
        })
        
    } catch (error) {
        res.status(400).json({
            error:true,
            message:"Error"
        })
        
    }
    
})

module.exports=router;
