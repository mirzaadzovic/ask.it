const Answer = require("../models/Answer");
const User = require("../models/User");
const BaseRepository = require("./BaseRepository");
const UserDto = require("../dtos/UserDto");
const { db } = require("../db");
const AnswerDto = require("../dtos/AnswerDto");
const AnswerReaction = require("../models/AnswerReaction");
const ReactionDto = require("../dtos/ReactionDto");

class AnswersRepository extends BaseRepository {
  constructor() {
    super(Answer);
  }

  getAll() {
    return async (req, res) => {
      try {
        const count = 2;
        const page = req.query.page || 0;
        const skip = req.query.skip || 0;
        const { questionId } = req.query;

        console.log("skip", skip, typeof skip);

        const response = await Answer.findAll({
          attributes: [
            ["answerid", "answerId"],
            ["answertext", "answerText"],
            ["answerdate", "answerDate"],
            ["userid", "userId"],
          ],
          include: [
            {
              model: User,
              as: "user",
            },
            {
              model: AnswerReaction,
              as: "reactions",
            },
          ],
          where: {
            questionid: questionId,
          },
          order: [["answerdate", "DESC"]],
        }).catch((err) => console.log(err.toString()));

        if (!response) return res.status(200).json([]);

        let questions = response.map((v) => v.toJSON());
        questions = questions.map((q) => ({
          ...q,
          user: new UserDto(q.user),
          reactions: new ReactionDto(q.reactions),
        }));

        questions = questions.slice(
          count * page + Number(skip),
          count * page + Number(count) + Number(skip)
        );
        console.log(questions);

        res.status(200).json(questions.reverse());
      } catch (err) {
        console.log(err.toString());
        res.status(500).send(err.toString());
      }
    };
  }

  post() {
    return async (req, res) => {
      try {
        const [response, created] = await Answer.upsert(req.body).catch(
          (err) => null
        );
        if (!response) return res.status(400).send("Bad request");

        res.status(201).json(new AnswerDto(response.toJSON()));
      } catch (err) {
        console.log(err.toString());
        res.status(500).send("Internal server error");
      }
    };
  }
}

module.exports = AnswersRepository;
