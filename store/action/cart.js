export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REDUCE_PRODUCT = 'REDUCE_PRODUCT';
export const INCREASE_PRODUCT = 'INCREASE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    pid: productId,
  };
};

export const reduceProduct = (productId) => {
  return {
    type: REDUCE_PRODUCT,
    pid: productId,
  };
};

export const increaseProduct = (productId) => {
  return {
    type: INCREASE_PRODUCT,
    pid: productId,
  };
};

export const clearCart = () => {
  console.log('clear cart');
  return {
    type: CLEAR_CART,
  };
};
