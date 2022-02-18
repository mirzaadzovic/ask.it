const express = require("express");
const { answerReactions } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", answerReactions.getAll());

// @GET BY ID
router.get("/:id", answerReactions.getById());

// @POST
router.post("/", answerReactions.post());

// @UPDATE
router.put("/:id", answerReactions.update());

// @DELETE
router.delete("/:id", answerReactions.delete());

module.exports = router;
