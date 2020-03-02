const product = require("./product.json");
const uniqueSizes = products => {
  var uniqueSizes = [];
  products.map(product => {
    if (product.size.length > 0 && product.size) {
      product.size.map(sizes => {
        if (sizes && sizes.length > 0) {
          if (uniqueSizes.indexOf(sizes) === -1) {
            uniqueSizes.push(sizes);
          }
        }
      });
    }
  });
  return uniqueSizes;
};

const sizes = uniqueSizes(product);
console.log(sizes);
