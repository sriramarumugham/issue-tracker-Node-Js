const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const db = require("./config/mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes"));

app.listen(PORT, function (err) {
  if (!err) {
    console.log(`express app running on port, ${PORT}`);
  }
});
