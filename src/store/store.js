import { configureStore } from '@reduxjs/toolkit'
import { sliceServicio } from './servicio/sliceServicio'


export const store = configureStore({
  reducer: {
    servicio: sliceServicio.reducer
    
  },
})