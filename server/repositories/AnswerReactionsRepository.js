const AnswerReaction = require("../models/AnswerReaction");
const BaseRepository = require("./BaseRepository");

class AnswerReactionsRepository extends BaseRepository {
  constructor() {
    super(AnswerReaction);
  }
}

module.exports = AnswerReactionsRepository;
