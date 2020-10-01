var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
  category: String,
  description: String,
});

var ProductModel = mongoose.model("product", productsSchema);

module.exports = ProductModel;
