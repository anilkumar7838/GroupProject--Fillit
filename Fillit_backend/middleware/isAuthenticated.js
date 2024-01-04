const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./CatchAsyncError")
const jwt = require("jsonwebtoken");
const User = require("../models/userModel/userSchema");

exports.isAuthenticatedUser = catchAsyncError(async (req,res,next)=>{
    const {token} =req.cookies;
    // console.log(token);

    if(!token){
        return next(new ErrorHandler("Please Login to access this resource",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);
    // console.log(req.user);
    
    next();
});

exports.authorizeRoles =(...roles)=>{
    return (req,res,next)=>{

        if(!roles.includes(req.user.role)){
           return next (new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403));
        }
        next();
    }
}