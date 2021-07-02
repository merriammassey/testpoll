const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    //"mongodb+srv://cluster0.c8kqh.mongodb.net/myFirstDatabase" --username <username>"
    "mongodb+srv://mmm97m:3ttKwSshJEHHacY@cluster0.c8kqh.mongodb.net/tastebuds?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

// log mongo queries being executed
mongoose.set("debug", true);

module.exports = mongoose.connection;
