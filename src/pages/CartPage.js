// CartPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import { cartActions } from '../store/cartSlice';
const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const handleUpdateQuantity = (id, quantity) => {
    dispatch(cartActions.updateQuantity({ id, quantity }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log(cartItems);

    const [counter, setCounter] = useState(0);
    useEffect( ()=>{

    }, [counter] )
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <h2>Total Price: ${totalPrice}</h2>
        <button onClick={(e) => { setCounter(counter+1)}}>{counter} </button>
      </div>
    </div>
  );
};

export default CartPage;
