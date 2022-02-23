export default class AnswerReactionInsertDto {
  constructor(reaction) {
    this.userid = reaction.userid;
    this.islike = reaction.islike;
    this.answerid = reaction.questionid;
  }
}
