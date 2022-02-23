export default class ReactionInsertDto {
  constructor(reaction) {
    this.userid = reaction.userid;
    this.islike = reaction.islike;
    this.questionid = reaction.questionid;
  }
}
