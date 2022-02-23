const AnswerReaction = require("../models/AnswerReaction");
const BaseRepository = require("./BaseRepository");

class AnswerReactionsRepository extends BaseRepository {
  constructor() {
    super(AnswerReaction);
  }

  update() {
    return async (req, res) => {
      if (!req.params) res.status(400).send("Bad request");
      const { id } = req.params;

      console.log(req.body);
      const entity = await AnswerReaction.findOne({
        where: {
          userid: req.user.id,
          answerid: id,
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

      const response = await AnswerReaction.destroy({
        where: {
          userid: req.user.id,
          answerid: id,
        },
      }).catch((err) => null);

      if (!response) return res.status(404).send("No item to delete");

      res.status(200).send("Reaction deleted");
    };
  }
}

module.exports = AnswerReactionsRepository;
