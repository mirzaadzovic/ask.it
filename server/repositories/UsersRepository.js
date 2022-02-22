const User = require("../models/User");
const BaseRepository = require("./BaseRepository");
const { db } = require("../db");
const Answer = require("../models/Answer");

class UsersRepository extends BaseRepository {
  constructor() {
    super(User);
    delete this.post;
  }

  getTopResponders() {
    return async (req, res) => {
      try {
        let response = await User.findAll({
          attributes: [
            ["userid", "userId"],
            ["firstname", "firstName"],
            ["lastname", "lastName"],
            ["avatarurl", "avatarUrl"],
            [db.fn("COUNT", db.col("answers.userid")), "total"],
          ],
          include: [{ model: Answer, as: "answers" }],
          group: ["answers.userid", "user.userid", "answers.answerid"],
          order: [[db.literal("total"), "DESC"]],
        });
        response = response.slice(0, 3);
        res.status(200).json(response);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = UsersRepository;
