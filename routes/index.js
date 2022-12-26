const express = require("express");

const AuthRoutes = require("./auth");
const AcademicRoutes = require("./academic");
const UserRoutes = require("./users");

const router = express.Router();

router.use("/auth", AuthRoutes);
router.use("/academic", AcademicRoutes);
router.use("/users", UserRoutes);

module.exports = router;
