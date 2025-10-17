import { createSlice } from "@reduxjs/toolkit";

const productSlise=createSlice({
    name:"product",
    initialState:{
        product:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.product=action.payload
        }
    }
})

export const {addProduct}=productSlise.actions;
export default productSlise.reducer