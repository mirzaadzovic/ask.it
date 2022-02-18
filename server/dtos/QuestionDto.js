class QuestionDto {
  constructor(question) {
    this.questionId = parseInt(question.questionid);
    this.questionText = question.questiontext;
    this.questionDate = question.questiondate;
    this.userId = question.userid;
  }
}

module.exports = QuestionDto;
