import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: []
}

let productSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setCart: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            if(!cartItem){
                action.payload.quantity = 1;
                state.cart = [...state.cart, action.payload]
            }else{
                cartItem.quantity++;
            }
        },

        incrementCartQuantity: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            cartItem.quantity++;
        },
        decrementCartQuantity: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            cartItem.quantity--;
        }
    }
})

export const {setProducts, setCart, incrementCartQuantity, decrementCartQuantity} = productSlice.actions;
export default productSlice.reducer;