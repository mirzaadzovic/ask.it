// const { Pool } = require("pg");
const { Sequelize } = require("sequelize");
const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, DATABASE_URL } = process.env;

const db = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// const pool = new Pool();

module.exports = {
  // query: (text, params) => pool.query(text, params),
  db,
};
