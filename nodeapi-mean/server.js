const express=require('express')
const employeeRoutes=require('./routes/employee')
var morgan = require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express();


mongoose.connect("mongodb://localhost:27017/employeeDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    err=>{
    if(err){
        console.log("mongodb could not connect");
    }else{
        console.log("mongodb connected");
    }
   
}
);

app.get('/',(req,res)=>{
    res.status(200).json({
        error:false,
        message:"API is running"
    })
})
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/employee',employeeRoutes)
//const PORT=process.env.PORT;default


const PORT=process.env.PORT||2222;

app.listen(PORT,()=>{
    console.log(`server running at port :${PORT}`);
})

