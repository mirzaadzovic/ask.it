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
        // let response = await User.findAll({
        //   attributes: [
        //     ["userid", "userId"],
        //     ["firstname", "firstName"],
        //     ["lastname", "lastName"],
        //     ["avatarurl", "avatarUrl"],
        //     [db.fn("COUNT", db.col("answers.userid")), "total"],
        //   ],
        //   include: [{ model: Answer, as: "answers" }],
        //   group: [
        //     "answers.userid",
        //     "user.userid",
        //     "firstname",
        //     "lastname",
        //     "avatarurl",
        //     "answers.answerid",
        //   ],
        //   order: [[db.literal("total"), "DESC"]],
        // });
        let response = await db
          .query(
            "select u.userid, firstname, lastname, avatarurl, COUNT(answerid) as total from users as u join answers as a on u.userid=a.userid group by u.userid, firstname, lastname, avatarurl order by total desc"
          )
          .catch((err) => null);
        response = response[0].slice(0, 3);
        console.log(response);
        res.status(200).json(response);
      } catch (err) {
        console.log(err.toString());
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = UsersRepository;
