import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {

      const isAddedToCart = state.items.find( (item) =>  item.name === action.payload.name) !== undefined
      
      if (!isAddedToCart) {
        action.payload.quantity = 1;
        state.items.push(action.payload)  
      }      
    
    },
    removeItem: (state, action) => {
      const updatedList = state.items.filter( (item) =>  item.name !== action.payload.name)
      
      state.items = updatedList

    },
    updateQuantity: (state, action) => {
      const item = state.items.find( (item) =>  item.name === action.payload.name) 

      if (item) {
        item.quantity = action.payload.quantity
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
