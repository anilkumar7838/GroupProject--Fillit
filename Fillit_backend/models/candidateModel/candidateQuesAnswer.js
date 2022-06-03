const mongoose = require("mongoose");

export const CandidateQuesAnswer= new mongoose.Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate'
  },
  questionSet: {
    type: Schema.Types.ObjectId,
    ref: 'QuestionSet'
  },
  // questionAnswers: {
  //   type: [Number] // You can add answer schema
  // },
  totalScore: {
    type: Number
  },
  isPassed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

CandidateQuesAnswer.pre('save', function updateTotalScore(next) {
  // update total score of the candidate here based on the correct questionAnswers and
  // questionSet.
  next();
});

CandidateQuesAnswer.pre('save', function updateIsPassed(next) {
  // update the isPassed based on the totalScore obtained by the candidate.
  next();
});

module.exports= mongoose.model('CandidateAnswer', CandidateQuesAnswer);
