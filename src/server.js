const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello world!123");
});

module.exports = app;
