const QuestionSchema=require("./question");
const mongoose = require('mongoose');

const QuestionSetSchema= new mongoose.Schema({
  questionSet: {
    type: [QuestionSchema],
  },
});

module.exports = mongoose.model('QuestionSet', QuestionSetSchema);