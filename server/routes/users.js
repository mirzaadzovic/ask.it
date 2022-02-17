const express = require("express");
const User = require("../models/User.js");
const { users } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", users.getAll());

// @GET BY ID
router.get("/:id", users.getById());

// @POST
router.post("/", users.post());

// @DELETE
router.delete("/:id", users.delete());

module.exports = router;
