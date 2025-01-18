const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const server = require("http").createServer(app);

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const defaultRoute = require("./routes/default");
const confirmationRoute = require("./routes/confirmation");
const imageRoute = require("./routes/image");

app.use("/", defaultRoute);
app.use("/confirmation", confirmationRoute);
app.use("/image", imageRoute);

if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running locally on port ${port}`);
  });
}

module.exports = app;
