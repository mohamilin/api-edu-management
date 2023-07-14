const express = require("express");

const AuthControllers = require('../modules/auth/controllers');
const Auth = require("../../middlewares/authentication");
 
const router = express.Router();

router.post('/register', AuthControllers.register )
module.exports = router;
