class QueryHelper {
  static generateInsertParams = (body) => {
    let keys = Object.keys(body);
    let query = "";

    keys.forEach((key, idx) => {
      query += key.toString();

      let isLast = idx === keys.length - 1;
      if (!isLast) query += ", ";
    });
    console.log(query);
    return query;
  };

  static generateInsertValues = (body) => {
    let values = Object.values(body);
    let query = "";

    values.forEach((v, idx) => {
      query += `$${idx + 1}`;

      let isLast = idx === values.length - 1;
      if (!isLast) query += ", ";
    });
    console.log(query);
    return query;
  };

  static generateInsertQuery(body, parameterDb) {
    const paramsString = this.generateInsertParams(body);
    const valuesString = this.generateInsertValues(body);
    return `INSERT INTO ${parameterDb} (${paramsString}) VALUES (${valuesString})`;
  }
}

module.exports = QueryHelper;
