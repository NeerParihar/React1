import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Scalculator'
const store=configureStore({
    reducer:counterSlice.reducer
})
export default store;