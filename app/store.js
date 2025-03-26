import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from '../slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store; // Ensure it's the default export