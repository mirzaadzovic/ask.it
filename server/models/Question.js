const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Question = db.define(
  "question",
  {
    questionid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    questiontext: {
      type: DataTypes.TEXT,
    },
    questiondate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = Question;
