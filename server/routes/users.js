const express = require("express");
const { users } = require("../repositories/UnitOfWork.js");
const router = express.Router();

// @GET ALL
router.get("/", users.getAll());
// @GET TOP RESPONDERS
router.get("/top-responders", users.getTopResponders());

// @GET BY ID
router.get("/:id", users.getById());

// @POST
// router.post("/", users.post());

// @UPDATE
router.put("/:id", users.update());

// @DELETE
router.delete("/:id", users.delete());

module.exports = router;
