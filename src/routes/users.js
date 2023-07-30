const express = require("express");

const UserControllers = require('../modules/user/controllers');
const Auth = require("../../middlewares/authentication");
 
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json({message:"respond with a resource"});
});

router.get('/all', Auth(), UserControllers.getAll )
module.exports = router;
