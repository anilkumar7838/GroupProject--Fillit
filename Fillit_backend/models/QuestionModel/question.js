const mongoose = require('mongoose');
const AnswerOption =require('../answerModel.js/answerOption');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
  },
});

module.exports= mongoose.model('Question', QuestionSchema);