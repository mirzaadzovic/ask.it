const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const questions = require("./routes/questions.js");
const users = require("./routes/users.js");
const answers = require("./routes/answers.js");
const reactions = require("./routes/reactions.js");
const answerReactions = require("./routes/answerReactions.js");
const auth = require("./routes/auth");
const app = express();
const { db } = require("./db");
const config = require("config");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// MIDDLEWARE
app.use(cors(config.get("cors_settings")));
app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// MIDDLEWARE -- ROUTES
const { API_ROUTE } = process.env;

app.use(`${API_ROUTE}/questions`, questions);
app.use(`${API_ROUTE}/users`, users);
app.use(`${API_ROUTE}/answers`, answers);
app.use(`${API_ROUTE}/reactions`, reactions);
app.use(`${API_ROUTE}/answer-reactions`, answerReactions);
app.use(`/auth`, auth);

// DB CONNECT
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}...`));
