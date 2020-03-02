const asyncHandler = require("../middleware/async");
const Product = require("../models/Products");

exports.getProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find({});
  return res.status(200).json({ success: 1, data: allProducts });
});
