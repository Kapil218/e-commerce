 const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

 const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
};

 const updateQuantity = (id, quantity) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  };
};
export { addToCart, removeFromCart, updateQuantity };