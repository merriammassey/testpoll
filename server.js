const express = require("express");
const path = require("path");
const db = require("./config/connections");

//FOR POLL
const bodyParser = require("body-parser");
const cors = require("cors");
const poll = require("./routes/poll");
//body parser middleware for poll

const app = express();
app.use("/poll", poll);
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//body parser middleware for poll
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//db.once("open", () => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});

module.exports = db;
