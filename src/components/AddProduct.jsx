import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../store/slices/ProductSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [rating, setRating] = useState(null);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelClick = () => {
        dispatch(addProduct({ title, description, price, rating: { rate: rating }, image }));
        navigate("/");
    };
    return (
        <Container>
            <Form>
                <Header>Add a Product</Header>
                <Label>Name</Label>
                <Input onChange={(e) => setTitle(e.target.value)} />
                <Label>Description</Label>
                <Input onChange={(e) => setDescription(e.target.value)} />
                <Label>Price</Label>
                <Input onChange={(e) => setPrice(e.target.value)} />
                <Label>Rating</Label>
                <Input onChange={(e) => setRating(e.target.value)} />
                <Label>Image</Label>
                <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <Button onClick={handelClick}>Add Product</Button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 90.8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
`;

const Form = styled.div`
    width: 30vw;
    height: 70vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;
    background-color: white;
`;

const Header = styled.h1``;
const Label = styled.div`
    font-size: 1.5rem;
    margin-top: 2rem;
`;
const Input = styled.input`
    font-size: 1.5rem;
`;

const Button = styled.button`
    height: 3rem;
    width: 7rem;
    background-color: black;
    color: white;
    margin-top: 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default AddProduct;
