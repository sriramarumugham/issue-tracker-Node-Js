const express = require("express");

const router = express.Router();

const home_controller = require("../controller/home_controller");

router.get("/", home_controller.home);
router.get('/create-project' , home_controller.newProject)
router.get('/detail' , home_controller.detail)
router.get('/create-issue' , home_controller.create_issue)


module.exports = router;
