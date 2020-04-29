var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  title: String,
  description: String,
});

var Todo = mongoose.model("Todo", userSchema, "todoLists");

module.exports = Todo;
