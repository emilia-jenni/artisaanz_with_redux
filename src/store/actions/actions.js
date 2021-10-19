import { getAllProducts, getMakers, getCart } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";
export const SELECT_MAKER = "SELECT_MAKER";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const INIT_CART = "INIT_CART";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getAllProducts();
    dispatch({
      type: INIT_PRODUCTS,
      data: products,
    });
  };
};

export const initializeMakers = () => {
  return async (dispatch) => {
    const makers = await getMakers();
    dispatch({
      type: INIT_MAKERS,
      data: makers,
    });
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    const cart = await getCart();
    dispatch({
      type: INIT_CART,
      data: cart,
    });
  };
};

export const makerName = (makerName) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_MAKER,
      data: makerName,
    });
  };
};



