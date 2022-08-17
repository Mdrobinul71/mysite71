const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      cpassword: {
        type: String,
        required: true,
      },

      messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            }
    
    }
    ],

      tokens:[
        {
        token:{
              type:String,
              required:true,
        }
      }
      ]

});


//hash password with bcryptjs when signup. use traditional function
userSchema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,12);
    this.cpassword=await bcrypt.hash(this.cpassword,12);
  }
  next();
});

userSchema.methods.generateAuthToken=async function(){
  try{
    //this token id compare with secret key this._id is dtabase id
    let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
  }catch(err){
    console.log(err)
  }
}

//stored the message
//this parameter get data from auth. where have addMessges
userSchema.methods.addMessage=async function(name,email,phone,message){
  try{
      this.messages=this.messages.concat({name,email,phone,message});
      await this.save();
      return this.messages;
  }catch(err){
      consolr.log(err)
  }
}


const User=mongoose.model('user2022',userSchema);
module.exports=User;