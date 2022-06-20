const ErrorHandler =require("../utils/errorHandler");
const catchAsyncError=require("../middleware/catchAsyncError");
const User=require("../models/userModel/userSchema");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
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

// -------------- Logout User ---------------------
exports.logout = catchAsyncError(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })

    res.status(200).json({
        success:true,
        message:"Logged Out",
    })
})

// ------------- Forgot Password -----------------

exports.forgotPassword = catchAsyncError(async(req,res,next)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler("User not found",404));
    }

    //Get ResetPassword Token
    const resetToken=user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it `;

    try{
        await sendEmail({
            email:user.email,
            subject:`Ecommerce Password Recovery`,
            message,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
        });

    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire= undefined;

        await user.save({validateBeforeSave:false});

        return next(new ErrorHandler(error.message,500));
    }
})

// ------------ Reset Password ------------

exports.resetPassword = catchAsyncError(async(req,res,next)=>{
    // creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.Token).digest("hex");

    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    })

    if(!user){
        return next(new ErrorHandler("Reset Password token is invalid or has been expired",400));
    }
    
    if(req.body.password!= req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match",400));
    }

    user.password=req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire= undefined;

    await user.save();
    sendToken(user,200,res);
});


// ----------- Update User password ------------

exports.updatePassword = catchAsyncError(async(req,res,next)=>{
    const user =await User.findById(req.user.id).select("+password");
    
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Old Password is incorrect",400));
    }
    
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match",400));
    }

    user.password = req.body.newPassword;
    
    await user.save();
    
    sendToken(user,200,res);
});

// ---------- Update User Profile ----------

exports.updateProfile = catchAsyncError(async(req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email,
    }
    // we will add Cloudinary later
    
    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{new:true,runValidators:true,useFindAndModify:false});
    
    res.status(200).json({
        succes:true,
    })
})

// ----------- Get User Details ----------
exports.getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user =await User.findById(req.user.id);
    
    res.status(200).json({
        success:true,
        user
    });
});


// --------------- send Email ------------

exports.getReview =catchAsyncError(async(req,res,next)=>{
    const review = req.body;
    const reviewMessage= `Name :- ${review.name} \nEmail:- ${review.email}\nMessage:- ${review.message}`;
    const confirmationMessage= `Thanks for your review .\n We truely appreciate your effort`;

    try{
        await sendEmail({
            reciever:process.env.SMPT_MAIL,
            subject:`Reviews`,
            message:reviewMessage,
        });
        await sendEmail({
            reciever:review.email,
            subject:`Greetings`,
            message:confirmationMessage,
        });
        res.status(200).json({
            success:true,
            message:`Email sent successfully`,
        });
    }catch(error){
        return next(new ErrorHandler(error.message,500));
    }
})