const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies["ask_it"];

  if (!token) return res.status(401).send("UNAUTHORIZED");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).clearCookie("ask_it").send("403 FORBIDDEN");
    }

    // Add user from payload
    req.user = user;
    next();
  });
};

module.exports = auth;
