const express=require('express');

const router=express.Router();

const issue_controller=require('../controller/issue_controller');

router.get("/create-issue/:id", issue_controller.create_issue);

router.post("/create-issue/:id" , issue_controller.create_bug);

module.exports = router;

