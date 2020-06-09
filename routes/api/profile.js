const express = require("express");
const router = express.Router();

// @route GET api/profile
//@desc   Test route
//@access Public
router.get("/", (reg, res) => res.send("profile route"));

module.exports = router;
