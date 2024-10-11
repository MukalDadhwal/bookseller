const express = require("express");
const router = express.Router();
const path = require("path");

// Handle GET request for the /users page
router.get("/", (req, res) => {
  res.sendFile("confirmation.html", { root: "./public" });
});

module.exports = router;
