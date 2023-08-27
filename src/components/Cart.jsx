import { useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "../components";

const Cart = () => {
    const data = useSelector((state) => state.products);
    return (
        <Container>
            {data.cart.map((product, id) => (
                <Product key={id} product={product} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    min-height: 90.7vh;
    flex-direction: column;
    background-color: lightgray;
    width: 100vw;
    margin: auto;
    flex-wrap: wrap;
`;

export default Cart;
