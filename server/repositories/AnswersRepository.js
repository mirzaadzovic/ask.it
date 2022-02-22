const Answer = require("../models/Answer");
const User = require("../models/User");
const BaseRepository = require("./BaseRepository");
const { db } = require("../db");

class AnswersRepository extends BaseRepository {
  constructor() {
    super(Answer);
  }
}

module.exports = AnswersRepository;
