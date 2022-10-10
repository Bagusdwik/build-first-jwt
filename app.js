const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const router = require("./routes/index");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Build Your First JWT Token"));
app.use("/data", router);

app.listen(process.env.PORT, () => {
  console.log(`Server Starting on http://127.0.01:${process.env.PORT}`);
});