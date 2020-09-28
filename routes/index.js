var express = require("express");

var router = express.Router();

router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hello", async function (req, res, next) {
  res.render("check");
});

module.exports = router;
