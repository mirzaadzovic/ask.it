const { db } = require("../db");
const { DataTypes } = require("sequelize");

const Answer = db.define(
  "answer",
  {
    questionid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    answertext: {
      type: DataTypes.TEXT,
    },
    answerdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

module.exports = Answer;
