const repository = require("../repositories/UnitOfWork.js");

const express = require("express");

const router = express.Router();

// @GET ALL
router.get("/", async (req, res) => {
  try {
    const questions = await repository.questions.getAll("questions");
    res.status(200).json(questions);
  } catch {
    res.status(500).send("Internal server error");
  }
});

// @GER BY ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await repository.questions.getById(id, "questions");

    if (!question) return res.status(404).send("USER NOT FOUND");

    res.status(200).json(question);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// @POST
router.post("/", (req, res) => {
  try {
    if (!req.body) return res.status(400).send("No request body");
    const question = repository.questions.post(req.body);

    res.status(201).json(question);
  } catch {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
