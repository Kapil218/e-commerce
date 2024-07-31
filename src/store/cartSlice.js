import { createSlice } from '@reduxjs/toolkit';

const initialState  =  {
    cartItems: [
      { id: 1, name: 'Product 1', price: 10, image: 'image1.jpg'  , quantity:1},
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
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
               const id = action.payload.id;
              // console.log(action.payload);
               state.cartItems = state.cartItems.map(item =>{ 
                if(item.id===id)return {...item , quantity:item.quantity+1};
                return item;
               }
              );
               const found =  state.cartItems.some( item => item.id  === id);
               if(!found){
                 state.cartItems.push({...action.payload,  quantity:1});
               }
                // increase totatl price
              state.totalPrice = calcTotalPrice(state.cartItems);
                 
            },
      updateQuantity(state, action) {
        const id = action.payload.id;
        state.cartItems = state.cartItems.map(item => 
         item.id === id ? { ...item, quantity: action.payload.quantity } : item
       );
           // increase totatl price
           state.totalPrice = calcTotalPrice(state.cartItems);
              
      },
      removeFromCart(state ,action) {
        const id = action.payload.id;
        state.cartItems =state.cartItems.filter( item => item.id!==id);
            // increase totatl price
            state.totalPrice = calcTotalPrice(state.cartItems);
              
      },
        incPrice(state) {
           state.totalPrice++;
        }

      

    }
  })
  export default cartSlice.reducer;
export const cartActions  =cartSlice.actions;