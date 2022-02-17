// const { Pool } = require("pg");
const { Sequelize } = require("sequelize");
const db = new Sequelize("ask_it", "postgres", "PZPpzp123", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// const pool = new Pool();

module.exports = {
  // query: (text, params) => pool.query(text, params),
  db,
};
