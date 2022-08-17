const express=require('express');
const router=express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const User=require('../model/userSchema');



const middleware=(req,res,next)=>{
    console.log("middleware")
    next();
}

router.get('/',(req,res)=>{
    res.send("hello world")
});

router.get('/about',middleware,(req,res)=>{
    console.log('middleware work')
    res.send("hello about")
});

router.post('/signup',async(req,res)=>{
    const{name,email,phone,work,password,cpassword}=req.body;
    //fill signup property 
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({message:"pls fill the all property"})
    }

    try{
       const userExist= await User.findOne({email:email});
       if(userExist){
           return res.status(422).json({error:"This email is exiest alredy"});  
       }else if(password !== cpassword){
        return res.status(422).json({error:"This password is not match"}); 
       }else{
            //if not exist create user with register name. user input and schema combine
             //work like user input. then schema combine then save it
             const userMake=new User({name,email,phone,work,password,cpassword});

             await userMake.save();//bcrypt work before save data
             //after make user need to send text
             res.status(201).json({message:"user signup succesfully"})
       }
       
     }catch(err){
        console.log(err)
    }

});


/*-----
router.post('/login',async (req,res)=>{
    try{
     const { email, password } = req.body;
     if (!email || !password) {
         return res.status(400).json({ error: "pls fill the property" });
       }
       //input email and database email if match
       const userLogin = await User.findOne({ email: email });
       console.log(userLogin);

       if(!userLogin){
            res.json({message:"user not login"})
       }
       else{
        res.json({message:"user login"})
       }
 
    }catch(err){
        console.log(err);
    }
 });
----*/

router.post('/login',async (req,res)=>{
    try{
     const { email, password } = req.body;
     if (!email || !password) {
         return res.status(400).json({ error: "pls fill the property" });
       }
       //input email and database email if match
       const userLogin = await User.findOne({ email: email });
       if(userLogin){
           
         //password is login password.userLogin.password is database password
         const isMatch = await bcrypt.compare(password, userLogin.password);

         //token create before add schema
         let token= await userLogin.generateAuthToken();
         console.log(token);

        //this one save token in browser,jwtoken is cookie name value is token
         res.cookie("jwtoken", token, {
             expires: new Date(Date.now() + 25892000000),
             httpOnly: true
           });
 
 
         if(!isMatch){
             res.status(400).json({ error: "user not login" });
         }else{
             res.json({ message: "userlogin" });
         }
   
       }else{
         res.status(400).json({ error: "invalid cradintel" });
       }
 
    }catch(err){
        console.log(err);
    }
 });

 router.get("/info", authenticate, (req, res) => {
    console.log("hello about");
    res.send(req.rootUser);
  });
 
  router.get("/getdata",authenticate, (req, res) => {
    console.log("All data");
    res.send(req.rootUser);
  });

  router.post("/contact",authenticate,async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
  
        if(!name || !email || !phone || !message){
            console.log("not fill property");
            return res.status(422).json({error:"pls filed all contact form"});
        }
        //compare database _id with req.userId then create userContact
        const userContact =await User.findOne({_id:req.userID});
        if(userContact){
            const userMessage=await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message:"user contact sucessfully"});
        }
  
    }catch(err){
        console.log(err);
    }
  });

  router.get('/logout',(req,res)=>{
    console.log("logout succesfull");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).res.send("User logout succesfully");
  
  })

module.exports=router;