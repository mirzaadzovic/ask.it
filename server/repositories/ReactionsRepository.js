const Reaction = require("../models/Reaction");
const BaseRepository = require("./BaseRepository");
const { db } = require("../db");
const User = require("../models/User");
const Question = require("../models/Question");

class ReactionsRepository extends BaseRepository {
  constructor() {
    super(Reaction);
  }
  update() {
    return async (req, res) => {
      if (!req.params) res.status(400).send("Bad request");
      const { id } = req.params;

      console.log(req.body);
      const entity = await Reaction.findOne({
        where: {
          userid: req.user.id,
          questionid: id,
        },
      });
      if (!entity) return res.status(404).send("Not found");

      entity.islike = !entity.islike;
      console.log("AAa", entity.get());

      let response = await entity.save();

      res.status(200).json(response);
    };
  }

  delete() {
    return async (req, res) => {
      if (!req.params) res.status(400).send("Bad request");
      const { id } = req.params;

      await Reaction.destroy({
        where: {
          userid: req.user.id,
          questionid: id,
        },
      });

      res.status(200).send("Reaction deleted");
    };
  }

  getTopQuestions() {
    return async (req, res) => {
      try {
        let response = await Reaction.findAll({
          attributes: [
            "reaction.questionid",
            [db.fn("COUNT", db.col("reaction.questionid")), "likes"],
          ],
          include: [{ model: Question, as: "question" }],
          where: {
            islike: true,
          },
          group: ["reaction.questionid", "question.questionid"],
          order: [[db.literal("likes"), "DESC"]],
        });
        response = response.slice(0, 3);
        res.status(200).json(response);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = ReactionsRepository;
