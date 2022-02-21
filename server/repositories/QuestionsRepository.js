const db = require("../db");
const QuestionDto = require("../dtos/QuestionDto");
const UserDto = require("../dtos/UserDto");
const QueryHelper = require("../helpers/QueryHelper");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
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
          ],
          order: [["questiondate", "DESC"]],
        }).catch((err) => console.log(err.toString()));

        if (!response) return res.status(400).send("Bad request");

        let questions = response.map((v) => v.toJSON());
        questions = questions.map((q) => ({
          ...new QuestionDto(q),
          user: new UserDto(q.user),
        }));

        const { userId } = req.query;
        if (userId)
          questions = questions.filter((q) => q.userId === parseInt(userId));

        questions = questions.slice(count * page, count * page + count);
        console.log(questions);

        res.status(200).json(questions);
      } catch (err) {
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
          ],
        }).catch((err) => null);

        if (!response) return res.status(404).send("Not found");

        response.get().user = new UserDto(response.get().user);

        res.status(200).json(response);
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

        res.status(201).json(new QuestionDto(response));
      } catch {
        res.status(500).send("Internal server error");
      }
    };
  }
}

module.exports = QuestionsRepository;
