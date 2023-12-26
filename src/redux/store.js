import { configureStore } from '@reduxjs/toolkit'
import bubbleReducer from '../redux/bubbleSlice'

export const store = configureStore({
  reducer: {
    bubble:bubbleReducer
  },
})