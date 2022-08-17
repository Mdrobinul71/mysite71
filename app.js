const dotenv=require('dotenv');
const express=require('express');
const app=express()
const cookieParser = require('cookie-parser');

//middleware serial maintain is very important
//env config
dotenv.config({path:'./config.env'});
const port=process.env.PORT || 5001

//json connect
app.use(express.json());
app.use(cookieParser());


//database connection
require('./db/conn')

//router link 
app.use(require('./router/auth'));

if(process.env.NODE_ENV=="production"){
    app.use(express.static("rportfolio/build"))
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'rportfolio','build','index.html'))
    })
  }


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})


