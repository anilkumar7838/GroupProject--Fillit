const User = require('../models/userModel');

const authorizeUser = async (req,res,next) => {
    // console.log(req.headers.authorization)
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = await User.findOne({Token:token}).select({Transaction:0,Pin:0,Token:0,Token_created_at:0,id:0});
        if(user){
            req.user = user;
            next();
        }
        else{
            res.status(401).json({
                success:false,
                message:"User not found"
            })
        }
    }
    else{
        res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    }
}
module.exports = authorizeUser;