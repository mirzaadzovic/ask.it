const db = require("../db");
const tables = {
  questions: {
    tblId: "questionId",
    tblName: "questions",
  },
  users: {
    tblId: "userId",
    tblName: "users",
  },
};

class BaseRepository {
  getAll = async (parameterDb) => {
    const { tblName } = tables[parameterDb];
    const response = await db.query(`SELECT * FROM ${tblName}`);
    return response.rows;
  };

  getById = async (id, parameterDb) => {
    const { tblName, tblId } = tables[parameterDb];
    const response = await db.query(
      `SELECT * FROM ${tblName} WHERE ${tblId} = $1`,
      [id]
    );
    return response.rows[0];
  };

  post = (body) => {
    questions.push(body);
    return questions[questions.length - 1];
  };
}

module.exports = BaseRepository;
