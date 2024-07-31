import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';

const HomePage = ({ products, addToCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
    
  };
  return (
    <div className="home-page">
    <div className="product-page">
      <h1>Product List</h1>
      <button onClick={(e) => {navigate('/cart')}}>Go to Cart</button>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default HomePage;
