const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  brand: { type: String },
  category: { type: String },
  color: { type: Array },
  date: { type: Date },
  description: { type: String },
  discount: { type: Number },
  gender: { type: String },
  name: { type: String },
  pictures: { type: Array },
  price: { type: Number },
  rating: { type: Number },
  salesPrice: { type: Number },
  size: { type: Array },
  stock: { type: Number },
  tag: { type: Array },
  buyUrl: { type: String }
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = Products;
