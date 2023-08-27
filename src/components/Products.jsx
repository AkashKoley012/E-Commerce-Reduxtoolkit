import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "../components";
import { sortProducts } from "../store/slices/ProductSlice";

const Products = () => {
    const data = useSelector((state) => state.products);
    const dispatch = useDispatch();
    return (
        <Container>
            <Button onClick={() => dispatch(sortProducts())}>Sort by price</Button>
            {data.products.map((product, id) => (
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

const Button = styled.button`
    margin-right: 1rem;
    width: 7rem;
    height: 3rem;
    position: relative;
    margin-top: 1rem;
    left: 92%;
    border: none;
    background: black;
    color: white;
    cursor: pointer;
`;

export default Products;
