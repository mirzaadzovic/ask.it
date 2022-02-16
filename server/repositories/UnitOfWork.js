const QuestionsRepository = require("./QuestionsRepository.js");

class UnitOfWork {
  constructor() {
    if (UnitOfWork.repository) return UnitOfWork.repository;
    else {
      QuestionsRepository.repository = this;
      this.questions = new QuestionsRepository();
    }
  }
}

module.exports = new UnitOfWork();
