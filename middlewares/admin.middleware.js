var db = require("../db");

module.exports.admin = function (req, res, next) {
  if (!req.signedCookies.adminId) {
    res.redirect("/auth/admin");
    return;
  }
  var admin = db.get("admin").find({ id: req.signedCookies.adminId }).value();

  if (!admin) {
    res.redirect("/auth/admin");
    return;
  }
  res.locals.admin = admin;
  next();
};
