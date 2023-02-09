const express = require("express");

const AuthRoutes = require("./auth");
const AcademicRoutes = require("./academic");
const UserRoutes = require("./users");

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({title: "Welcome Edu Management", message: "By Amilin"})
})
router.use("/auth", AuthRoutes);
router.use("/academic-years", AcademicRoutes);
router.use("/users", UserRoutes);

module.exports = router;
