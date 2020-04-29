require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

app.set("views", "./views");
app.set("view engine", "pug");
var cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");
var sessionMiddleware = require("./middlewares/session.middleware");

var userRoute = require("./routes/user.route");
var authRoute = require("./routes/login.route");
var todoRoute = require("./routes/todo.route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("asdasdasd"));
app.use(sessionMiddleware);

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/todo", todoRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
