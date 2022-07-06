import styled from 'styled-components';
import { Link } from 'react-router-dom';


// all containers (divs)
export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid silver;
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    padding: calc(1rem * 2);
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 30%;
        margin-left: 10px;
        margin-right: auto;
    }
`;
export const NavbarImageContainer = styled.div`
    display: flex;
    justify-content: right;
    flex-direction: row;
    width: 30%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
`;

// all link styles
export const NavbarLink = styled(Link)`
    color: silver;
    font-size: 30px;
    margin-left: 10px;
    margin-top: -10px;
`;

// all image styled
export const Image = styled.img`
    width: 30%;
    height: 100px;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: 200px;
    }
`;