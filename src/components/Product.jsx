import styled from "styled-components";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, deleteProduct, removeCart } from "../store/slices/ProductSlice";

const Product = ({ product }) => {
    const rate = product.rating.rate;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loaction = useLocation();
    const handelCart = () => {
        dispatch(addCart(product.id));
        navigate("/cart");
    };
    return (
        <Container>
            <Image src={product.image} alt="Not Found" onClick={() => navigate(`/product/${product.id}`)} />
            <Content onClick={() => navigate(`/product/${product.id}`)}>
                <Title>{product.title}</Title>
                <Price>Rs {product.price}</Price>
                <Rating>
                    <Star rate={rate}>★</Star>
                    <Star rate={rate}>★</Star>
                    <Star rate={rate}>★</Star>
                    <Star rate={rate}>★</Star>
                    <Star rate={rate}>★</Star>
                </Rating>
            </Content>
            <Left>
                <Description>{product.description}</Description>
                <Buttons>
                    {loaction.pathname !== "/cart" ? <Button onClick={() => navigate(`/update/${product.id}`)}>Edit</Button> : ""}
                    {loaction.pathname !== "/cart" ? <Button onClick={() => dispatch(deleteProduct(product.id))}>Delete</Button> : <Button onClick={() => dispatch(removeCart(product.id))}>Remove</Button>}
                    {loaction.pathname !== "/cart" ? <Button onClick={handelCart}>Cart</Button> : ""}
                </Buttons>
            </Left>
        </Container>
    );
};
const Container = styled.div`
    margin: 2rem;
    height: 15rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 1.5rem;
`;
const Content = styled.div`
    font-size: 1.2rem;
    width: 25rem;
    display: flex;
    cursor: pointer;
    margin: 2rem 5rem;
    flex-direction: column;
    font-family: sans-serif;
`;
const Title = styled.h3`
    margin-bottom: 1rem;
    width: 25rem;
`;
const Price = styled.p`
    margin-top: 2rem;
    color: gray;
`;
const Rating = styled.div`
    font-size: 2rem;
`;
const Star = styled.span`
    /* color: ${(props) => (props.rate >= 1 ? "yellow" : "gray")}; */
    &:nth-child(1) {
        color: ${(props) => (props.rate >= 1 ? "yellow" : "lightgray")};
    }
    &:nth-child(2) {
        color: ${(props) => (props.rate >= 2 ? "yellow" : "lightgray")};
    }
    &:nth-child(3) {
        color: ${(props) => (props.rate >= 3 ? "yellow" : "lightgray")};
    }
    &:nth-child(4) {
        color: ${(props) => (props.rate >= 4 ? "yellow" : "lightgray")};
    }
    &:nth-child(5) {
        color: ${(props) => (props.rate >= 5 ? "yellow" : "lightgray")};
    }
`;
const Description = styled.div`
    margin-left: 15rem;
    font-size: 1.2rem;
    margin: 2rem 5rem;
    color: gray;
    text-align: justify;
    font-family: sans-serif;
`;
const Image = styled.img`
    width: 10rem;
    cursor: pointer;
`;
const Buttons = styled.div`
    margin-left: 5rem;
`;
const Button = styled.button`
    margin-right: 1rem;
    width: 5rem;
    height: 2rem;
    border: none;
    background: black;
    color: white;
    cursor: pointer;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

Product.propTypes = {
    product: PropTypes.any,
};

export default Product;
