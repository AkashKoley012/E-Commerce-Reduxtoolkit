import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "../components";
import { sortProducts } from "../store/slices/ProductSlice";
import { useEffect, useState } from "react";

const Products = () => {
    let data = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        setProducts(data.products);
        let categories = new Set(data.products.map((product) => product.category));
        setCategory(Array.from(categories));
    }, [data]);
    const handelSearch = (e) => {
        setProducts(data.products.filter((p) => p.title.toLowerCase().includes(e.target.value.toLowerCase())));
    };
    const handelRange = (e) => {
        setProducts(data.products.filter((p) => p.price <= e.target.value));
    };
    const handelCategory = (e) => {
        setProducts(data.products.filter((p) => p.category.includes(e.target.value)));
    };
    return (
        <Container>
            <Row>
                <Input placeholder="Search here..." onChange={handelSearch} />
                <Input type="range" onChange={handelRange} max={10000} />
                <Select onChange={handelCategory}>
                    <Option value="">All</Option>
                    {category.map((category, id) => (
                        <Option key={id} value={category}>
                            {category}
                        </Option>
                    ))}
                </Select>
                <Button onClick={() => dispatch(sortProducts())}>Sort by price</Button>
            </Row>
            {products.map((product, id) => (
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
    overflow-y: scroll;
    margin: auto;
    flex-wrap: wrap;
`;

const Row = styled.div`
    position: relative;
    margin: 7rem 2rem 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 36rem;
    height: 2rem;
    padding-left: 1rem;
    border: none;
    &:focus {
        border: none;
        outline: none;
    }
`;

const Select = styled.select`
    width: 10rem;
    font-size: 1rem;
    text-transform: capitalize;
    padding-left: 1rem;
    height: 2rem;
    border: none;
    &:focus {
        outline: none;
        border: none;
    }
`;
const Option = styled.option`
    /* font-family: sans-serif; */
`;

const Button = styled.button`
    width: 7rem;
    height: 3rem;
    border: none;
    background: black;
    color: white;
    cursor: pointer;
`;

export default Products;
