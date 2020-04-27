var db = require("../db.js");
var shortid = require("shortid");

module.exports.login = function (req, res) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var user = db.get("users").find({ email: email }).value();

  if (!user) {
    res.render("auth/login", {
      error: ["User was wrong"],
      values: req.body,
    });
    return;
  }
  if (user.password !== password) {
    res.render("auth/login", {
      error: ["Password was wrong"],
      values: req.body,
    });
    return;
  }
  res.cookie("userId", user.id, {
    signed: true,
  });
  res.redirect("/users");
};
