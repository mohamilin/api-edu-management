const express = require("express");

const router = express.Router();
const AcademicControllers = require("../src/academic/controller");
const GDriveController = require("../src/gdrive/controller");

const Auth = require("../middlewares/authentication");

router.get(
  "/",
  Auth("manageUsers"),
  AcademicControllers.getAll
);

router.post('/', Auth('manageUsers'), AcademicControllers.add)

router.get("/gdrive",  Auth("manageUsers"), GDriveController.uploadFile);

module.exports = router;
