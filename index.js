const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);

const PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));
const getView = (file) => path.join(__dirname, "views", file);

app.get("/", (req, res) => {
  res.sendFile(getView("product.html"));
});

app.get("/confirmation", (req, res) => {
  res.sendFile(getView("confirmation.html"));
});

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT + "...");
});
