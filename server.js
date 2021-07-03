const express = require("express");
const path = require("path");
//const db = require("./config/connections");
require("./config/connections");
//FOR POLL
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const PORT = 3000;

const poll = require("./routes/poll");
//body parser middleware for poll
app.use("/poll", poll);

app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

//body parser middleware for poll

//db.once("open", () => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});

//module.exports = db;
