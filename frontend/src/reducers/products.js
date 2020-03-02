/***
 *  Products Reducers
 ***/

const initalState = {
  products: [],
  detail_products: [],
  compare_products: null
};
export default (state = initalState, action) => {
  if (action.type === "ACTUAL_PRODUCTS") {
    return { ...state, products: action.products };
  } else if (action.type === "COMPARE_PRODUCTS") {
    return {
      ...state,
      compare_products: action.payload
    };
  } else {
    return state;
  }
};
