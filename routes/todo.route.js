var express = require("express");
var router = express.Router();

var controller = require("../controllers/todo.controller");
var authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware.requireAuth, controller.todo);

router.get("/create", controller.createtodo);

router.post("/create", controller.postcreatetodo);

module.exports = router;
