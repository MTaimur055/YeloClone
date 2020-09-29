var express = require("express");
let router = express.Router();
const { model } = require("../../models/product");
var ProductModel = require("../../models/product");

router.get("/", async (req, res, next) => {
  let prodshow = await ProductModel.find();
  //console.log(prodshow);
  res.send(prodshow);
});

router.get("/:id", async (req, res, next) => {
  let oneprodshow = await ProductModel.findById(req.params.id);
  //console.log(prodshow);
  res.send(oneprodshow);
});

router.post("/", async (req, res, next) => {
  //console.log(req.body);
  let newprod = new ProductModel();
  newprod.name = req.body.name;
  newprod.brand = req.body.brand;
  newprod.image = req.body.image;
  newprod.price = req.body.price;
  newprod.category = req.body.category;
  newprod.description = req.body.description;

  await newprod.save();
  res.send(newprod);
});

router.put("/:index", async (req, res, next) => {
  //console.log(req.body);
  let preprod = await ProductModel.findById(req.params.index);
  preprod.name = req.body.name;
  preprod.brand = req.body.brand;
  preprod.image = req.body.image;
  preprod.price = req.body.price;
  preprod.category = req.body.category;
  preprod.description = req.body.description;

  await preprod.save();
  res.send(preprod);
});

router.delete("/:id", async (req, res, next) => {
  let delprod = await ProductModel.findByIdAndDelete(req.params.id);
  //console.log(delprod);
  res.send(delprod);
});

module.exports = router;
