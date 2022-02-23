class AnswerDto {
  constructor(answer) {
    this.answerId = answer.answerid;
    this.answerText = answer.answertext;
    this.answerDate = answer.answerdate;
    this.userId = answer.userid;
    this.questionId = answer.questionid;
  }
}

module.exports = AnswerDto;
