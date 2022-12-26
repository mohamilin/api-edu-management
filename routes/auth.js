const express = require("express");
const AuthenticationControllers = require("../src/authentication/controller");
const validate = require("../validation/validate");
const Validation = require("../validation");

const router = express.Router();


router.post(
  "/register",
  validate(Validation.AuthValidation.register),
  AuthenticationControllers.register
);
router.post("/login-email", AuthenticationControllers.loginByEmail);
router.post("/logout", AuthenticationControllers.logout);

module.exports = router;
