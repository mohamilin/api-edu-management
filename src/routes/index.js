const express = require("express");

const UserRoutes = require("./users");
const AuthRoutes = require("./auth");

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({title: "Welcome", message: "By Amilin"})
})

router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);

module.exports = router;
