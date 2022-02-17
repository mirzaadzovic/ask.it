const db = require("../db");
const QueryHelper = require("../Helpers/QueryHelper");
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
        const load = req.query.load || 1;
        const response = await this.Model.findAll({
          limit: 20 * load,
          include: User,
        }).catch((err) => console.log(err.toString()));

        if (!response) return res.status(400).send("Bad request");

        res.status(200).json(response);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }
}

module.exports = QuestionsRepository;
