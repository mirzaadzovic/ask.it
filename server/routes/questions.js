const { questions } = require("../repositories/UnitOfWork.js");
const express = require("express");
const router = express.Router();
const PARAM_DB = "questions";

// @GET ALL
router.get("/", questions.getAll());

// @GET BY ID
router.get("/:id", questions.getById());

// @POST
router.post("/", questions.post());

// @UPDATE
router.put("/:id", questions.update());

// @DELETE
router.delete("/:id", questions.delete());

module.exports = router;
