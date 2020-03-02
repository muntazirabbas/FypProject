import axios from "axios";

export const receiveProducts = () => async dispatch => {
  const url = "http://localhost:5001/api/v1/products";
  const productsfromDB = await axios.get(url);

  dispatch({ type: "ACTUAL_PRODUCTS", products: productsfromDB.data.data });
};

export const compareProducts = (
  products,
  brand1,
  brand2,
  brand3
) => dispatch => {
  const getProducts1 = products.filter(product => product.mainBrand === brand1);
  const products1 = getProducts1;
  const getProducts2 = products.filter(product => product.mainBrand === brand2);
  const products2 = getProducts2;
  const getProducts3 = products.filter(product => product.mainBrand === brand3);
  const products3 = getProducts3;

  const compareProductList = {
    products1,
    products2,
    products3
  };

  dispatch({ type: "COMPARE_PRODUCTS", payload: compareProductList });
};
