const express=require('express');

const router=express.Router();

const home_controller = require("../controller/home_controller");

router.get("/create-issue/:id", home_controller.create_issue);

router.post("/create-issue/:id" , home_controller.create_bug);


module.exports = router;

