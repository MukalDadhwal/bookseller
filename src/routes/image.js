const express = require("express");
const router = express.Router();

// Handle GET request for the homepage
router.get("/", (req, res) => {
  res.sendFile("images/shopping.png", { root: "./public" });
});

module.exports = router;
