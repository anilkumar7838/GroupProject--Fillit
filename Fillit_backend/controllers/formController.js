const Form = require("../models/formsModel/formSchema");
const catchAsyncError = require("../middleware/CatchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Apifeatures=require("../utils/Apifeatures");

// ---------Create forms----------
exports.createForms = catchAsyncError(async(req,res,next)=>{
    const form = await Form.create(req.body);
    const response = await Form.find({},{_id:1}).sort({_id:-1}).limit(1);
    res.status(201).json({
        success:true,
        response,
    });
});

// --------Get All forms---------
exports.getAllForms = catchAsyncError(async(req,res,next)=>{
    const resultPerPage=5;
    // ***To test search use "keyword" as query** 
    // ***To test pagination use "page" as query** 
    const apiFeature= new Apifeatures(Form.find({},{title:1,createAt:1}),req.query).search().pagination(resultPerPage);
    const formCount = await Form.countDocuments();
    const form = await apiFeature.query;
    res.status(201).json({
        success:true,
        formCount,
        form
    });
});

// -----------update Forms----------
exports.updateForm = catchAsyncError(async(req,res,next)=>{
    let form = await Form.findById(req.params.id);

    if(!form){
        return next(new ErrorHandler("Form not found",404));
    }
    form=await Form.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        message:"Updated Successfully"
    });
})

// ---------Delete Forms-----------
exports.deleteForm = catchAsyncError(async(req,res,next)=>{
    const form = await Form.findById(req.params.id);
    if(!form){
        return next(new ErrorHandler("Form not found",404));
    }
    await form.remove();
    res.status(200).json({
        success:true,
        message:"Delete Successfully"
    });
})

// ---------- Get Particular form Details--------
exports.getFormDetails = catchAsyncError(async(req,res,next)=>{
    const form = await Form.findById(req.params.id);
    if(!form){
        return next(ErrorHandler("Form not found",404));
    }
    res.status(200).json({
        success:true,
        form
    });
});