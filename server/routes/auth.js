const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserProfileDto = require("../dtos/UserProfileDto");
const JwtHelpers = require("../helpers/JwtHelper");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

// @LOGIN
router.post("/login", async (req, res) => {
  try {
    if (!req.body) return res.status(400).send("400 BAD REQUEST");
    const { email, password } = req.body;

    const response = await User.findOne({ where: { email } });
    const user = response.get();

    if (!user) return res.status(401).send("401 UNAUTHORIZED");
    const correctPassword = await bcrypt.compare(password, user.passwordhash);

    if (!correctPassword) return res.status(401).send("401 UNAUTHORIZED");

    const token = JwtHelpers.GenerateToken(user);

    return res
      .status(200)
      .cookie("ask_it", token, { httpOnly: true, maxAge: 3600000 })
      .json(new UserProfileDto(user));
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// @REGISTER
router.post("/register", async (req, res) => {
  try {
    const { body } = req;
    if (!body || !body.password || body.password?.length < 4)
      return res.status(400).send("No body");

    const emailExists = await User.findOne({ where: { email: body.email } });
    if (emailExists?.get().email)
      return res.status(400).send("EMAIL ALREADY EXIST");

    body.passwordsalt = await bcrypt.genSalt(10);
    bcrypt.hash(body.password, body.passwordsalt, async (err, hash) => {
      body.passwordhash = hash;
      console.log("USER", body);
      const response = await User.create(body).catch((err) => err);
      if (!response) return res.status(400).send("Bad request");

      res.status(201).json(new UserProfileDto(response.get()));
    });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// @GET LOGGED IN USER
router.get("/user", authMiddleware, async (req, res) => {
  try {
    if (!req.user) return res.status(401).send("401 UNAUTHORIZED");
    const response = await User.findByPk(req.user.id);
    const user = new UserProfileDto(response.get());

    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// @LOGOUT
router.get("/logout", (req, res) => {
  return res.status(200).clearCookie("ask_it").send("LOGOUT SUCCESSFUL");
});
module.exports = router;
