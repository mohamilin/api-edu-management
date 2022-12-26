const express = require("express");

const router = express.Router();
const AcademicControllers = require("../src/academic/controller");
const GDriveController = require("../src/gdrive/controller");

const Auth = require("../middlewares/authentication");

router.get(
  "/years",
  Auth("manageUsers"),
  AcademicControllers.getAllAcademicYears
);

router.get("/gdrive",  Auth("manageUsers"), GDriveController.uploadFile);

module.exports = router;
