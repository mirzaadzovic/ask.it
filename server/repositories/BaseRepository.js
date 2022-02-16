const db = require("../db");
const QueryHelper = require("../Helpers/QueryHelper");
const tables = {
  questions: {
    tblId: "questionId",
  },
  users: {
    tblId: "userId",
  },
};

class BaseRepository {
  getAll = async (parameterDb) => {
    const response = await db.query(`SELECT * FROM ${parameterDb}`);
    return response.rows;
  };

  getById = async (id, parameterDb) => {
    const { tblId } = tables[parameterDb];
    const response = await db.query(
      `SELECT * FROM ${parameterDb} WHERE ${tblId} = $1`,
      [id]
    );
    return response.rows[0];
  };

  post = async (body, parameterDb) => {
    const query = QueryHelper.generateInsertQuery(body, parameterDb);
    console.log(query);
    const response = await db.query(query, Object.values(body));
    return response;
  };
}

module.exports = BaseRepository;
