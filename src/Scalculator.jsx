import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'squarecube',
    initialState:4,
    reducers:{
        square:state=>{
            return state=state**2


        },
        cube:state=>{
            return state=state**3
        }
    }
})
export const {square,cube} =counterSlice.actions
export default counterSlice