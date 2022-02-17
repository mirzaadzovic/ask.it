const AnswersRepository = require("./AnswersRepository.js");
const QuestionsRepository = require("./QuestionsRepository.js");
const UsersRepository = require("./UsersRepository.js");

class UnitOfWork {
  constructor() {
    this.questions = new QuestionsRepository();
    this.users = new UsersRepository();
    this.answers = new AnswersRepository();
  }
}

module.exports = new UnitOfWork();
