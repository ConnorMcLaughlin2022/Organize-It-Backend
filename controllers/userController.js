const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signUp
router.post("/signup", (req, res) => {
    User.create({
        username: req.body. username,
        email: req.body.username,
        password: req.body.password,

    })
})