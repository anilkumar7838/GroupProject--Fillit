const mongoose = require('mongoose');
const validator = require('validator');

const Schema=mongoose.Schema;
const CandidateSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true,"Please Enter Your Name"],
    maxlength:[30,"Cannot exceed 30 Characters"],
    minlength:[3,"Name should have minimum 3 or more Characters"],
  },
  email: {
    type: String,
    required:[true,"Please Enter your Email"],
    unique:true,
    validate:true,
    validate:[validator.isEmail,"Please Enter a valid Email"],
  },
  
  totalAttempt: {
    type: Number,
    default: 0,
  },

  // ------Not Ready----------
  candidateQuestionAnswers: {
    type: [Schema.Types.ObjectId],
    ref: 'CandidateQuesAnswer'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);