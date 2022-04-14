const express = require("express");
const router = express.Router();

// define the home page route
router.get("/demo", (req, res) => {
  res.send("User home page");
});

module.exports = router;
