import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addCart, deleteProduct, removeCart } from "../store/slices/ProductSlice";

const ProductDetails = () => {
    let { id } = useParams();
    const data = useSelector((state) => state.products);
    const product = data.products.filter((p) => p.id == id)[0];
    const loaction = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelCart = () => {
        dispatch(addCart(product.id));
        navigate("/cart");
    };
    return (
        <Container>
            <Image src={product.image} alt="Not Found" />
            <Details>
                <Name>{product.title}</Name>
                <Description>{product.description}</Description>
                {loaction.pathname !== "/cart" ? <Button onClick={() => navigate(`/update/${product.id}`)}>Edit</Button> : ""}
                {loaction.pathname !== "/cart" ? <Button onClick={() => dispatch(deleteProduct(product.id))}>Delete</Button> : <Button onClick={() => dispatch(removeCart(product.id))}>Remove</Button>}
                {loaction.pathname !== "/cart" ? <Button onClick={handelCart}>Cart</Button> : ""}
            </Details>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;
const Image = styled.img`
    width: 36rem;
    margin: 0 5rem;
`;
const Details = styled.div`
    padding: 7rem;
    font-family: "circular";
`;
const Name = styled.h1``;
const Description = styled.p`
    color: lightgray;
    padding-top: 2rem;
    min-height: 34rem;
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

export default ProductDetails;
