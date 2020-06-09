const express = require("express");
const router = express.Router();

// @route GET api/auth
//@desc   Test route
//@access Public
router.get("/", (reg, res) => res.send("auth route"));

module.exports = router;
