import styled from "styled-components";
import addproduct from "../assets/addproduct.png";
import profile from "../assets/man.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <SubContainer>
                <Header>eCommerce</Header>
                <Link to="/">
                    <Item>Products</Item>
                </Link>
                <Link to="/product">
                    <Item>
                        Add a product
                        <Image src={addproduct} />
                    </Item>
                </Link>
                <Link to="/cart">
                    <Item>
                        Cart
                        <Image src={cart} />
                    </Item>
                </Link>
            </SubContainer>
            <SubContainer>
                <Item>John Doe</Item>
                <Image src={profile} />
            </SubContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
`;
const SubContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Header = styled.h2`
    margin: 0 1rem;
    color: #558fd4;
`;
const Image = styled.img`
    width: 3.5rem;
    margin: 0 0.5rem;
`;
const Item = styled.div`
    margin: 0 1rem;
    font-size: 1.2rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    & ${Image} {
        width: 1.5rem;
    }
`;

export default Navbar;
