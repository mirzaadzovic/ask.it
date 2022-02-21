const Reaction = require("../models/Reaction");
const BaseRepository = require("./BaseRepository");

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
      console.log("AAa", entity);
      if (!entity) return res.status(404).send("Not found");

      entity.islike = !entity.islike;
      await entity.save();
      res.status(200).json(entity);
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
}
module.exports = ReactionsRepository;
