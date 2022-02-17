const User = require("../models/User");
const BaseRepository = require("./BaseRepository");
// const { QueryTypes } = require("sequelize");
// const { db } = require("../db");

class UsersRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}

module.exports = UsersRepository;
