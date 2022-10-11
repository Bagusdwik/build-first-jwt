const router = require('express').Router();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const verifikasi = require("../middlewares/index");

const data = [];

router.route('/')
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    data.push({
      username: username,
      password: password
    })

    const tokenJwt = jwt.sign({
      username: req.body.username
    }, process.env.JWT_KEY);
    
    res.status(201).send({
      message: "Success Post Data", 
      token: tokenJwt
    });
  })
  .get(verifikasi, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    jwt.verify(req.token, process.env.JWT_KEY, (err) => {
      if (err) {
        res.status(403).send({
          message: "invalid token"
        })
      } else {
        res.json({
          message: "oke",
          data: data
        });
      }
    })
  });

module.exports = router;