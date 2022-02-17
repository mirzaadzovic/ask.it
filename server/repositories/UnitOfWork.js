const AnswersRepository = require("./AnswersRepository.js");
const QuestionsRepository = require("./QuestionsRepository.js");
const ReactionsRepository = require("./ReactionsRepository.js");
const UsersRepository = require("./UsersRepository.js");

class UnitOfWork {
  constructor() {
    if (UnitOfWork.instance) return UnitOfWork.instance;
    UnitOfWork.instance = this;
    this.questions = new QuestionsRepository();
    this.users = new UsersRepository();
    this.answers = new AnswersRepository();
    this.reactions = new ReactionsRepository();
  }
}

module.exports = new UnitOfWork();
