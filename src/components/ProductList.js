// ProductPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import CartPage from '../pages/CartPage';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
    // dispatch(cartActions.incPrice())
    
  };

 

  return (
    <>
    <div className="product-page">
      <h1>Product List</h1>
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
    <CartPage/>
    </>
    
  

  
  );
};

export default ProductList;
