const express = require("express");
const { answerReactions } = require("../repositories/UnitOfWork.js");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.js");

// @GET ALL
router.get("/", answerReactions.getAll());

// @GET BY ID
router.get("/:id", answerReactions.getById());

// @POST
router.post("/", authMiddleware, answerReactions.post());

// @UPDATE
router.put("/:id", authMiddleware, answerReactions.update());

// @DELETE
router.delete("/:id", authMiddleware, answerReactions.delete());

module.exports = router;
