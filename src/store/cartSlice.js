import { createSlice } from '@reduxjs/toolkit';

const initialState  =  {
    cartItems: [
     
    ],
    totalPrice:0,
}


 const calcTotalPrice  = (cartItems) =>{
    let total =  0;
    cartItems.map( (item) => { 
      total   = total + item.quantity*item.price;
    })
      return total;
 }

 const addToCart = (state , action) => {
  const id = action.payload.id;
   state.cartItems = state.cartItems.map(item =>{ 
    if(item.id===id)return {...item , quantity:item.quantity+1};
    return item;
   }
  );
   const found =  state.cartItems.some( item => item.id  === id);
   if(!found){
     state.cartItems.push({...action.payload,  quantity:1});
   }
  state.totalPrice = calcTotalPrice(state.cartItems);
 }

 const updateQuantity = (state, action ) => {
  const id = action.payload.id;
  state.cartItems = state.cartItems.map(item => 
   item.id === id ? { ...item, quantity: action.payload.quantity } : item
 );
     state.totalPrice = calcTotalPrice(state.cartItems);
 }
 const removeFromCart=(state ,action)=> {
  const id = action.payload.id;
  state.cartItems =state.cartItems.filter( item => item.id!==id);
      state.totalPrice = calcTotalPrice(state.cartItems);
        
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart,
      updateQuantity,
      removeFromCart
    }
  })
  export default cartSlice.reducer;
export const cartActions  =cartSlice.actions;