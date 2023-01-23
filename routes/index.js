const express = require("express");

const router = express.Router();

const home_controller = require("../controller/home_controller");

router.get("/", home_controller.home);
router.get("/create-project", home_controller.newProject);
router.post("/create-project", home_controller.create_project);
router.get("/create-issue/:id", home_controller.create_issue);
router.get("/detail/:id", home_controller.get_detail);
router.post("/create-issue/:id" , home_controller.create_bug);

module.exports = router;
