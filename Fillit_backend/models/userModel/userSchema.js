const mongoose = require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const crypto = require("crypto");

// 1. Name
// 2. Email
// 3. Password
// 4. Forms[] (List of all forms (ref) created by user)

const Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        maxLength: [40,"Name cannot exceed 40 character"],
        minLength: [2,"Name should have minimum 2 or more character"]
    },
    email: {
        type: String,
        unique:true,
        validate:true,
        validate:[validator.isEmail,"Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true, "Please Enter Your Password"],
        minLength:[8,"Password should be grater than 8 characters"],
        select:false,  
    },
    avatar:{
        public_id:{
            type:String,
            //required:true,
        },
        url:{
            type:String,
            //required:true,
        }
    },
    formType:{
        type: Schema.Types.ObjectId,
        ref:'formSchema',
    },
    role:{
        type:String,
        default:"user",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save",async function(next){

    //console.log(this.isModified("password"));
    if(!this.isModified("password")){
        next();
    } 
    this.password=await bcrypt.hash(this.password,10);
 });

// JWT TOKEN
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
}; 

// Compare Password
userSchema.methods.comparePassword= async function(enteredPassword ){
    return await bcrypt.compare(enteredPassword,this.password);
}

// Generate Password reset Token
userSchema.methods.getResetPasswordToken = function(){
    // generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // hashing and adding resetPasswordToken to userShema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;
     
    return resetToken;

}



module.exports=mongoose.model("User",userSchema);