const express = require("express");

const UserRoutes = require("./users");
const AuthRoutes = require("./auth");
const PpdbRoutes = require("./ppdb");
const OptionRoutes = require("./options");

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({title: "Welcome", message: "By Amilin"})
})

router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/ppdb", PpdbRoutes);
router.use("/options", OptionRoutes);

module.exports = router;
