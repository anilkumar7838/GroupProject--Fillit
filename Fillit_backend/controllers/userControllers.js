const ErrorHandler =require("../utils/errorHandler");
const catchAsyncError=require("../middleware/catchAsyncError");
const User=require("../models/userModel/userSchema");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
const cloudinary = require("cloudinary");


// cloudinary-->Fillit@2022

//------- Register User -----------
exports.registerUser = catchAsyncError(async(req,res,next)=>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"avatars",
        width:150,
        crop:"scale",
    })

    const {name,email,password}=req.body;
    // form-type not used now  

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
        }
    });
    sendToken(user,201,res);
});

// ------- Login User --------
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    // cheacking if user given Password and email both
    if(!email ||!password){
        return next(new ErrorHandler("Please Enter Email and Password",400));
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    

    sendToken(user,200,res);

})

// -------------- Logout User ---------------------
exports.logout = catchAsyncError(async(req,res,next)=>{
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

    // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`
    const resetPasswordUrl = `${process.env.FRONTEND_URL}://${req.get("host")}/password/reset/${resetToken}`

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
    
    if(req.body.avatar !== ""){
        const user=await User.findById(req.user.id);
        const imageId = user.avatar.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"avatars",
            width:150,
            crop:"scale",
        })

        newUserData.avatar={
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
        }

    }
    
    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{new:true,runValidators:true,useFindAndModify:false});
    
    res.status(200).json({
        success:true,
    })
})

// ----------- Get User Details ----------
exports.getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user =await User.findById(req.user.id);
    // console.log(user);
    res.status(200).json({
        success:true,
        user,
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