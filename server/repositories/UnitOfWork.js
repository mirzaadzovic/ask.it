const QuestionsRepository = require("./QuestionsRepository.js");
const UsersRepository = require("./UsersRepository.js");

class UnitOfWork {
  constructor() {
    this.questions = new QuestionsRepository();
    this.users = new UsersRepository();
  }
}

module.exports = new UnitOfWork();
