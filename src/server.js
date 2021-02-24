const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello world!1472");
});

module.exports = app;
