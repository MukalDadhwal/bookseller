const express = require("express");
const router = express.Router();
const path = require("path");

// Handle GET request for the homepage
router.get("/", (req, res) => {
  res.sendFile("product.html", { root: "./public" });
});

module.exports = router;
