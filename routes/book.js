const express = require("express");
const router = express.Router();

// define the home page route
router.get("/demo", (req, res) => {
  res.send("Book home page");
});

module.exports = router;

/*
/api/book/demo ide megy a get request
*/
