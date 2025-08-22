
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);
      if (existingItem) {
       
        existingItem.quantity += 1;
      } else {
       
        state.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        
        return state.filter((item) => item.id !== id);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;