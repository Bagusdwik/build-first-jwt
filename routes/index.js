const router = require('express').Router();
require("dotenv").config();
const jwt = require('jsonwebtoken');

router.route('/')
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const tokenJwt = jwt.sign({username: req.body.username}, process.env.JWT_KEY);
    res.status(201).send({
      message: "success post data", 
      token: tokenJwt
    });
  })
  .get((req, res) => {
    res.send("aa");
  });

module.exports = router;