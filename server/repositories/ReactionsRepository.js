const Reaction = require("../models/Reaction");
const BaseRepository = require("./BaseRepository");

class ReactionsRepository extends BaseRepository {
  constructor() {
    super(Reaction);
  }
}

module.exports = ReactionsRepository;
