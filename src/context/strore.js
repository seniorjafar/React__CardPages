import { configureStore  } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import wishlistSlice from './wishlistSlice'
import cartSlice from './cardSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
})
