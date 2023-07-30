const express = require("express");

const AuthControllers = require('../modules/auth/controllers');
 
const router = express.Router();

router.post('/register', AuthControllers.register );
router.post('/login', AuthControllers.login )

module.exports = router;
