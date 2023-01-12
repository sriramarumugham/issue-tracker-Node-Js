const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const db = require("./config/mongoose");

const app = express();

const expressLayouts = require("express-ejs-layouts");
//express layouts
app.use(expressLayouts);
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes"));

app.listen(PORT, function (err) {
  if (!err) {
    console.log(`express app running on port, ${PORT}`);
  }
});
