var mongoose = require("mongoose");

var categoriesSchema = mongoose.Schema({
  name: String,
});

var CategoryModel = mongoose.model("category", categoriesSchema);

module.exports = CategoryModel;
