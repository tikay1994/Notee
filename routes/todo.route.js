var express = require("express");
var router = express.Router();

var controller = require("../controllers/todo.controller");

router.get("/", controller.todo);

router.get("/create", controller.createtodo);

router.post("/create", controller.postcreatetodo);

module.exports = router;
