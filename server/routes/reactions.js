const express = require("express");
const { reactions } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", reactions.getAll());

// @GET BY ID
router.get("/:id", reactions.getById());

// @POST
router.post("/", reactions.post());

// @UPDATE
router.put("/:id", reactions.update());

// @DELETE
router.delete("/:id", reactions.delete());

module.exports = router;
