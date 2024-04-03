import { createSlice } from "@reduxjs/toolkit";


export const inputSlice =createSlice({
    name:"input",
    initialState:{
        input:null,
    },
    reducers:{
        getInput:(state,action)=>{
            state.input= action.payload;
        }
    }
})
export const {getInput}= inputSlice.actions;
export const selectInput=(state)=>state.input.input;
export default inputSlice.reducer;