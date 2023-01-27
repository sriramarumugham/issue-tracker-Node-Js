const express = require("express");

const router = express.Router();

const home_controller = require("../controller/home_controller");

router.get("/create-project", home_controller.newProject);

router.post("/create-project", home_controller.create_project);

router.get("/detail/:id", home_controller.get_detail);

module.exports = router;
