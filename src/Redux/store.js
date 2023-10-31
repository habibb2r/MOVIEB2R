import { configureStore } from '@reduxjs/toolkit'
import bookMarkSlice from './slices/bookMarkSlice'

export const store = configureStore({
  reducer: {
    bookMarkSlice : bookMarkSlice
  },
})