const repository = require("../repositories/UnitOfWork.js");

const express = require("express");

const router = express.Router();

// @GET ALL
router.get("/", (req, res) => {
  const questions = repository.questions.getAll();
  res.status(200).json(questions);
});

// @GER BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const question = repository.questions.getById(id);

  if (!question) return res.status(404).send("USER NOT FOUND");

  res.status(200).json(question);
});

// @POST
router.post("/", (req, res) => {
  if (!req.body) return res.status(400).send("No request body");
  const question = repository.questions.post(req.body);

  res.status(201).json(question);
});

module.exports = router;
