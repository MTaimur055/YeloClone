var express = require("express");
const { model } = require("../../models/category");
let router = express.Router();
var CategoryModel = require("../../models/category");

router.get("/", async (req, res, next) => {
  let categoryshow = await CategoryModel.find();
  //console.log(categoryshow);
  //res.send("Working");
  res.send(categoryshow);
});

router.get("/:id", async (req, res, next) => {
  let index = req.params.id;
  let onecategoryshow = await CategoryModel.findById(index);
  //console.log(onecategoryshow);
  //res.send("Working");
  res.send(onecategoryshow);
});

router.delete("/:id", async (req, res, next) => {
  let index = req.params.id;
  let onecategorydel = await CategoryModel.findByIdAndDelete(index);
  console.log(onecategorydel);
  //res.send("Working");
  res.send(onecategorydel);
});

router.post("/", async (req, res, next) => {
  console.log("Working");
  let data = req.body.name;
  console.log(data);
  let newcategory = new CategoryModel();
  newcategory.name = data;
  await newcategory.save();
  //res.send("Working");
  res.send(newcategory);
});

router.put("/:index", async (req, res, next) => {
  //console.log("Working");
  let data = req.body.name;
  let database = await CategoryModel.findById(req.params.index);
  //console.log(database.name);
  //res.send("Working");
  database.name = data;
  await database.save();
  res.send(database);
});

module.exports = router;
