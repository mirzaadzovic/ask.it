const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Answer = require("./Answer");
const Reaction = require("./Reaction");

const Question = db.define(
  "question",
  {
    questionid: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
    },
  },
  { timestamps: false }
);

Question.hasMany(Answer, { as: "answers", foreignKey: "questionid" });
Answer.hasOne(Question, { foreignKey: "questionid" });

Question.hasMany(Reaction, { as: "reactions", foreignKey: "questionid" });
Reaction.hasOne(Question, { foreignKey: "questionid" });

module.exports = Question;
