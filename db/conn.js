const mongoose=require('mongoose');
const DB=process.env.DATABASE

//this is return promise 
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connect")
}).catch(()=>{
    console.log("connection error")
})