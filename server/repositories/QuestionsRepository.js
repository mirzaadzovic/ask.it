const db = require("../db");
const QueryHelper = require("../Helpers/QueryHelper");
const BaseRepository = require("./BaseRepository");

class QuestionsRepository extends BaseRepository {
  post = async (body, parameterDb) => {
    body.questionDate = new Date().toISOString();
    console.log(body.questionDate);
    const query = QueryHelper.generateInsertQuery(body, parameterDb);
    const response = await db.query(query, Object.values(body));
    return response.rows;
  };
}

module.exports = QuestionsRepository;
