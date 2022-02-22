const Answer = require("../models/Answer");
const User = require("../models/User");
const BaseRepository = require("./BaseRepository");
const { db } = require("../db");

class AnswersRepository extends BaseRepository {
  constructor() {
    super(Answer);
  }

  getTopResponders() {
    return async (req, res) => {
      try {
        let response = await Answer.findAll({
          attributes: [
            "answer.userid",
            [db.fn("COUNT", db.col("answer.userid")), "count"],
          ],
          include: [{ model: User, as: "user" }],
          group: ["answer.userid", "user.userid"],
          order: [[db.literal("count"), "DESC"]],
        });
        response = response.slice(0, 3);
        res.status(200).json(response);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = AnswersRepository;
