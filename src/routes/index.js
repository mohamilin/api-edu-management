const express = require("express");

const UserRoutes = require("./users");

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({title: "Welcome", message: "By Amilin"})
})

router.use("/users", UserRoutes);

module.exports = router;
