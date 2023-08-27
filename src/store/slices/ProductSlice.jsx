import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initProducts = createAsyncThunk("products", async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const result = await response.json();
    return result;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        cart: [],
        error: null,
    },
    reducers: {
        // initProduct(state, action) {
        //     state.products = action.payload;
        // },
        addProduct(state, action) {
            action.payload.id = state.products.length + 1;
            action.payload.image = URL.createObjectURL(action.payload.image);
            state.products.push(action.payload);
        },
        updateProduct(state, action) {
            const { id, title, description, price, rating } = action.payload;
            let product = state.products[id - 1];
            product = { ...product, title, description, price, rating };
            state.products[id - 1] = product;
        },
        deleteProduct(state, action) {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        sortProducts(state) {
            state.products = state.products.sort((a, b) => a.price - b.price);
        },
        addCart(state, action) {
            state.cart.push(state.products[action.payload - 1]);
        },
        removeCart(state, action) {
            state.cart = state.cart.filter((cart) => cart.id !== action.payload);
        },
    },
    extraReducers: {
        [initProducts.pending]: (state) => {
            state.loading = true;
        },
        [initProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        [initProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default productSlice.reducer;
export const { addProduct, updateProduct, deleteProduct, sortProducts, addCart, removeCart } = productSlice.actions;
