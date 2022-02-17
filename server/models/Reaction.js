const { db } = require("../db");
const { DataTypes } = require("sequelize");

const Reaction = db.define(
  "reaction",
  {
    questionid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    islike: {
      type: DataTypes.BOOLEAN,
    },
    reactiondate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

module.exports = Reaction;
