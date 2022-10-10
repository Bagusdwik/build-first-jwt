const router = require('express').Router();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const verifikasi = require("../middlewares/index");

router.route('/')
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const tokenJwt = jwt.sign({
      username: req.body.username
    }, process.env.JWT_KEY);
    
    res.status(201).send({
      message: "success post data", 
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
          data: {
            username: username,
            password: password
          }
        });
      }
    })
  });

module.exports = router;