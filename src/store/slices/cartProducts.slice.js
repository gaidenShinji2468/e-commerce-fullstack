import {createSlice} from "@reduxjs/toolkit";

export const cartProductsSlice = createSlice({
    name: "cartProducts",
    initialState: [],
    reducers: {
        addProduct: (state, action) => [...state, action.payload],
	removeProduct: (state, action) => state.filter(product => product.id !== action.payload)
    }
});

export const {
    addProduct,
    removeProduct
} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
