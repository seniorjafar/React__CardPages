import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      // ... (existing code)
    },
    incrementCartQuantity(state, action) {
      // ... (existing code)
    },
    decrementCartQuantity(state, action) {
      // ... (existing code)
    },
    removeItemFromCart(state, action) {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeAllItemsFromCart(state) {
      // ... (existing code)
    },
  },
});

export const {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeAllItemsFromCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;