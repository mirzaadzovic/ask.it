const express = require("express");
const { answers } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", answers.getAll());

// @GET BY ID
router.get("/:id", answers.getById());

// @POST
router.post("/", answers.post());

// @DELETE
router.delete("/:id", answers.delete());

module.exports = router;
