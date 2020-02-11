const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://iedson:Isaiah40:31@ds339968.mlab.com:39968/heroku_3498zb24", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});