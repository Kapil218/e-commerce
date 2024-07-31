import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import { cartActions } from './store/cartSlice';

const App = () => {
  // Define a list of products
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'image3.jpg' },
    { id: 4, name: 'Product 4', price: 80, image: 'image4.jpg' },
    { id: 5, name: 'Product 5', price: 40, image: 'image5.jpg' },
    { id: 6, name: 'Product 6', price: 50, image: 'image6.jpg' },
  ];

  // Get cart items and dispatch function from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage products={products} addToCart={(product) => dispatch(cartActions.addToCart({id:product.id}))} />} />
          {/* Route for CartPage */}
          <Route path="/cart" element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={(id) => dispatch(cartActions.removeFromCart({id}))}
              updateQuantity={(id, quantity) => dispatch(cartActions.updateQuantity({id, quantity}))}
              totalPrice={totalPrice}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
