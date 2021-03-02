const express = require("express");
const path = require("path");

const app = express();

app.use("/build", express.static(path.join(__dirname, "../build/build.js")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000);