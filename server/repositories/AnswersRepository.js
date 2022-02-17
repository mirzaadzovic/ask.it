const Answer = require("../models/Answer");
const BaseRepository = require("./BaseRepository");

class AnswersRepository extends BaseRepository {
  constructor() {
    super(Answer);
  }
}

module.exports = AnswersRepository;
