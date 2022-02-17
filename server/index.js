const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const questions = require("./routes/questions.js");
const users = require("./routes/users.js");
const app = express();
const { db } = require("./db");
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// MIDDLEWARE -- ROUTES
app.use("/api/v1/questions", questions);
app.use("/api/v1/users", users);
app.get("/", (req, res) => res.send("HOME"));

// DB CONNECT
db.authenticate()
  .then(() => console.log("Database.connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
