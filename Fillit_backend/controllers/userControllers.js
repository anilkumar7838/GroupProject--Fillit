const ErrorHandler =require("../utils/errorHandler");
const catchAsyncError=require("../middleware/catchAsyncError");
const User=require("../models/userModel/userSchema");
//------- Register User -----------
exports.registerUser = catchAsyncError(async(req,res,next)=>{
    const {name,email,password}=req.body;
    // form-type not used now  

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is a sample id",
            url:"Profile_pic_url"
        }
    });
    const token=user.getJWTToken();

    res.status(201).json({
        success:true,
        token,
    })
});

// ------- Login User --------
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    // cheacking if user given Password and email both
    if(!email ||!password){
        return next(new ErrorHandler("Please Enter Email and Password",400));
    }

    const user=await User.findOne({email}).select("+password");

    const isPasswordMatched =user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or Password",401));
    }

    const token=user.getJWTToken();
    
    res.status(201).json({
        success:true,
        token,
    });

})


exports.logout = catchAsyncError(async(req,res,next)=>{
    
})