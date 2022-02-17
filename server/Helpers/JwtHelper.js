const json = require("jsonwebtoken");

class JwtHelpers {
  static GenerateToken(payload) {
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey);
    return json.sign(
      {
        id: payload.userid,
        name: `${payload.firstName} ${payload.lastName}`,
      },
      secretKey,
      { expiresIn: 3600 }
    );
  }
}

module.exports = JwtHelpers;
