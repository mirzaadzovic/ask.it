const express = require("express");
const authMiddleware = require("../middlewares/auth.js");
const { reactions } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", reactions.getAll());

// @GET BY ID
router.get("/:id", reactions.getById());

// @POST
router.post("/", authMiddleware, reactions.post());

// @UPDATE
router.put("/:id", authMiddleware, reactions.update());

// @DELETE
router.delete("/:id", authMiddleware, reactions.delete());

module.exports = router;
