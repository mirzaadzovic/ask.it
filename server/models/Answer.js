const { db } = require("../db");
const { DataTypes } = require("sequelize");
const AnswerReaction = require("./AnswerReaction");

const Answer = db.define(
  "answer",
  {
    answerid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    questionid: {
      type: DataTypes.BIGINT,
    },
    userid: {
      type: DataTypes.BIGINT,
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

Answer.hasMany(AnswerReaction, {
  as: "answerreactions",
  foreignKey: "answerid",
});
AnswerReaction.hasOne(Answer, { foreignKey: "answerid" });
module.exports = Answer;
