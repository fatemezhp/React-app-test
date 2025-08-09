import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);

        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;