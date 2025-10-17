import { configureStore } from "@reduxjs/toolkit";
import cartSlise from "./cartSlise";
import productSlise from './product.js'
export const store=configureStore({
    reducer:{
        cart:cartSlise,
        product:productSlise
    }
})