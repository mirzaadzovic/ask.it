const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const questions = require("./routes/questions.js");
const app = express();
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// MIDDLEWARE -- ROUTES
app.use("/api/v1/questions", questions);
app.get("/", (req, res) => res.send("HOME"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
