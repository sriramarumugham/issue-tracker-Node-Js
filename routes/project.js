const express = require("express");

const router = express.Router();

const project_controller=require('../controller/project_controller');


router.get("/create-project", project_controller.newProject);

router.post("/create-project", project_controller.create_project);

router.get("/detail/:id", project_controller.get_detail);

module.exports = router;
