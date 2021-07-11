var express = require("express");
var router = express.Router();
var db = require("../models");
/* GET users listing. */

router.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API!",
  })
);
router.get("/login", (req, res) => {
  let user = {
    email: req.body.email,
    name: req.body.name,
    fbId: req.body.fbId,
  };
  db.users
    .findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: user,
    })
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => res.send(err));
});

router.post("/", function (req, res) {
  let form = req.body;
  db.users.create(form).then((result) => {
    res.send({ error: false, data: result, message: "Create success" });
  });
});

module.exports = router;