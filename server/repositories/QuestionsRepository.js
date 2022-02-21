const db = require("../db");
const QuestionDto = require("../dtos/QuestionDto");
const ReactionDto = require("../dtos/ReactionDto");
const UserDto = require("../dtos/UserDto");
const QueryHelper = require("../helpers/QueryHelper");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Reaction = require("../models/Reaction");
const User = require("../models/User");
const BaseRepository = require("./BaseRepository");

class QuestionsRepository extends BaseRepository {
  constructor() {
    super(Question);
  }
  getAll() {
    return async (req, res) => {
      try {
        const count = 5;
        const page = req.query.pages || 1;
        const response = await this.Model.findAll({
          include: [
            {
              model: User,
              as: "user",
            },
            { model: Answer, as: "answers" },
            { model: Reaction, as: "reactions" },
          ],
          order: [["questiondate", "DESC"]],
        }).catch((err) => console.log(err.toString()));

        if (!response) return res.status(400).send("Bad request");

        let questions = response.map((v) => v.toJSON());
        questions = questions.map((q) => ({
          ...new QuestionDto(q),
          user: new UserDto(q.user),
          reactions: new ReactionDto(q.reactions),
        }));

        const { userId } = req.query;
        if (userId)
          questions = questions.filter((q) => q.userId === parseInt(userId));

        questions = questions.slice(count * page, count * page + count);

        res.status(200).json(questions);
      } catch (err) {
        console.log(err.toString());
        res.status(500).send(err.toString());
      }
    };
  }

  getById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const response = await this.Model.findByPk(id, {
          include: [
            { model: User, as: "user" },
            { model: Answer, as: "answers" },
            { model: Reaction, as: "reactions" },
          ],
        }).catch((err) => null);

        if (!response) return res.status(404).send("Not found");
        const question = new QuestionDto(response);

        question.user = new UserDto(response.get().user);
        question.reactions = new ReactionDto(response.get().reactions);

        res.status(200).json(question);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
  post() {
    return async (req, res) => {
      try {
        console.log(req.body);
        const response = await this.Model.create(req.body).catch((err) => null);
        if (!response) return res.status(400).send("Bad request");

        let question = new QuestionDto(response);
        question.reactions = new ReactionDto(response.get().reactions);
        res.status(201).json(question);
      } catch {
        res.status(500).send("Internal server error");
      }
    };
  }
  delete() {
    return async (req, res) => {
      try {
        const { id } = req.params;

        await Reaction.destroy({ where: { questionid: id } });
        const entity = await Question.findByPk(id);
        if (!entity) return res.status(404).send("Not found");

        await entity.destroy();
        res.status(204).send("Deleted");
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = QuestionsRepository;
