const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;

const db = require("./config/mongoose");

const app = express();

const expressLayouts = require("express-ejs-layouts");

// static files
app.use(express.static("static"));

//express layouts
app.use(expressLayouts);

//for extracting the css static tag and place it in header
app.set("layout extractStyles", true);

//for extracting the scirtp tag and place it in the end of body
app.set("layout extractScripts", true);

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
