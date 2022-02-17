const json = require("jsonwebtoken");

class JwtHelpers {
  static GenerateToken(payload) {
    console.log(payload);
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey);
    return json.sign(
      {
        id: payload.userid,
        name: `${payload.firstname} ${payload.lastname}`,
      },
      secretKey,
      { expiresIn: 3600 }
    );
  }
}

module.exports = JwtHelpers;
