const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Answer = require("./Answer");
const AnswerReaction = require("./AnswerReaction");
const Question = require("./Question");
const Reaction = require("./Reaction");

const User = db.define(
  "user",
  {
    userid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    passwordhash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    passwordsalt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatarurl: {
      type: DataTypes.TEXT,
    },
    registrationdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

User.hasMany(Question, { as: "questions", foreignKey: "userid" });
Question.belongsTo(User, { foreignKey: "userid" });

User.hasMany(Answer, { as: "answers", foreignKey: "userid" });
Answer.belongsTo(User, { foreignKey: "userid" });

User.hasMany(Reaction, { as: "reactions", foreignKey: "userid" });
Reaction.belongsTo(User, { foreignKey: "userid" });

User.hasMany(AnswerReaction, { as: "answerreactions", foreignKey: "userid" });
AnswerReaction.belongsTo(User, { foreignKey: "userid" });

module.exports = User;
