const mongoose = require("mongoose");
// not working 
// const Float = require("mongoose-float").loadType(mongoose, 4);
require("mongoose-double")(mongoose);

const formSchema = new mongoose.Schema({
  formtype: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colorTheme: {
    type: String,
    required: true,
    default: "Cyan",
  },
  isPrivate: {
    type: Boolean,
    required: true,
    default: false,
  },
  allowedUsers: [
    {
      users: {
        type: String,
        required: true,
      },
    },
  ],
  questions: [
    {
      QuestionType: {
        type: String,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      marks: {
        type: mongoose.Schema.Types.Decimal128,
        // required:true,
        default: 0,
      },
      negative: {
        type: mongoose.Schema.Types.Decimal128,
        // required:true
      },
      trueAnswer: {
        type: String,
        required: true,
      },
      isRequired: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
  },
  createAt:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("form", formSchema);