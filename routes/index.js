var express = require("express");
var router = express.Router();
const todosController = require("../controllers").todos;
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Express" });
});

module.exports = router;
