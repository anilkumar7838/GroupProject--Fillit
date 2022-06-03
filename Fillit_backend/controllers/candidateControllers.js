const candidate=require("../models/candidateModel/candidate");
const catchAsyncError =require("../middleware/CatchAsyncError");


exports.candidateResponse=catchAsyncError(async(req,res,next)=>{
    const C_response =await candidate.create(req.body);
    res.status(201).json({
        success:true,
        C_response
    });
});