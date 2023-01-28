const express = require("express");

const router = express.Router();

// const home_controller = require("../controller/home_controller");

const home_controller=require('../controller/home_controller');

router.get("/", home_controller.home);

router.use("/project", require("./project"));

router.use("/issue", require("./issue"));

router.use('/.netlify/functions/api' , router);

module.exports = router;
