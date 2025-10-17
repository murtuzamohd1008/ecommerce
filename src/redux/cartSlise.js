import { createSlice } from "@reduxjs/toolkit";

const cartSlise = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addCart: (state, action) => {
            let id = action.payload.id;
            let findItem = state.cart.find((item) => item.id === id);
            if (findItem) {
                findItem.quantity += 1;
                findItem.totalPrice += findItem.price;
            }
            else {
                state.cart.push({
                    id: action.payload.id,
                    img:action.payload.img,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price,
                    category: action.payload.category,
                    quantity: 1,
                    totalPrice: action.payload.price
                })
            }
            state.totalPrice += action.payload.price;
            state.totalQuantity += 1;
        },
        deleteCart: (state, action) => {
            let id = action.payload;
            let findIndex = state.cart.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
                state.totalQuantity -= state.cart[findIndex].quantity;
                state.totalPrice -= state.cart[findIndex].totalPrice;
                state.cart.splice(findIndex, 1);
            }
        },

        increaseQuantity: (state, action) => {
            let id = action.payload;
            let findIndex = state.cart.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
                let item = state.cart[findIndex];
                item.totalPrice += item.price;
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.price
            }
        },

        decreaseQuantity: (state, action) => {
            let id = action.payload;
            let findIndex = state.cart.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
                let item = state.cart[findIndex];
                item.totalPrice -= item.price;
                if(item.totalPrice<1){
                    state.totalPrice-=item.totalPrice;
                    state.totalQuantity-=item.quantity;
                    state.cart.splice(findIndex,1)
                    return
                }
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price
            }
           
             else {

                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
                state.cart.splice(findIndex, 1);
            }
        }
    }
})


export const { addCart,deleteCart,increaseQuantity,decreaseQuantity } = cartSlise.actions;
export default cartSlise.reducer;