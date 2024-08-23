import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

// Calculate total price of cart items
const calcTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * item.price;
  });
  return total;
};

// Add item to cart
const addToCartHandler = (state, action) => {
  const id = action.payload.id;
  const found = state.cartItems.find((item) => item.id === id);
  if (found) {
    found.quantity += 1;
  } else {
    state.cartItems.push({ ...action.payload, quantity: 1 });
  }
  state.totalPrice = calcTotalPrice(state.cartItems);
};

// Update item quantity in cart
const updateQuantityHandler = (state, action) => {
  const id = action.payload.id;
  state.cartItems = state.cartItems.map((item) =>
    item.id === id ? { ...item, quantity: action.payload.quantity } : item
  );
  state.totalPrice = calcTotalPrice(state.cartItems);
};

// Remove item from cart
const removeFromCartHandler = (state, action) => {
  const id = action.payload.id;
  state.cartItems = state.cartItems.filter((item) => item.id !== id);
  state.totalPrice = calcTotalPrice(state.cartItems);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: addToCartHandler,
    updateQuantity: updateQuantityHandler,
    removeFromCart: removeFromCartHandler,
  },
});

export default cartSlice.reducer;
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
