var db = require("../db.js");
var shortid = require("shortid");

module.exports.todo = function (req, res) {
  res.render("todo", {
    todos: db.get("todoLists").value(),
  });
};

module.exports.createtodo = function (req, res) {
  res.render("todo/create");
};

module.exports.postcreatetodo = function (req, res) {
  req.body.id = shortid.generate();
  var errors = [];

  if (!req.body.title) {
    errors.push("Title is required");
  }
  if (!req.body.description) {
    errors.push("Desciption is required");
  }
  if (errors.length) {
    res.render("todo/create", {
      errors: errors,
      values: req.body,
    });
    return;
  }
  db.get("todoLists").push(req.body).write();
  res.redirect("/todo");
};
