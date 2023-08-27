import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateProduct } from "../store/slices/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    let { id } = useParams();
    const data = useSelector((state) => state.products);
    const product = data.products.filter((p) => p.id == id)[0];
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [rating, setRating] = useState(product.rating.rate);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelClick = () => {
        dispatch(updateProduct({ id, title, description, price, rating: { rate: rating } }));
        navigate("/");
    };
    return (
        <Container>
            <Form>
                <Header>Update a Product</Header>
                <Label>Name</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                <Label>Description</Label>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                <Label>Price</Label>
                <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                <Label>Rating</Label>
                <Input value={rating} onChange={(e) => setRating(e.target.value)} />
                <Button onClick={handelClick}>Update Product</Button>
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

export default UpdateProduct;
