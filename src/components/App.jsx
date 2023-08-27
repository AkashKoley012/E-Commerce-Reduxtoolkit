import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { AddProduct, Cart, Navbar, ProductDetails, Products, UpdateProduct } from "../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initProducts } from "../store/slices/ProductSlice";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initProducts());
    });
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product" element={<AddProduct />} />
                <Route path="/update/:id" element={<UpdateProduct />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Container>
    );
};

const Container = styled.div``;

export default App;
