const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Question = require("./Question");

const User = db.define(
  "user",
  {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    passwordhash: {
      type: DataTypes.TEXT,
    },
    passwordsalt: {
      type: DataTypes.TEXT,
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

console.log("EEE", db.models.user === User);
module.exports = User;
