import styled from 'styled-components';
import { Link } from 'react-router-dom';


// all container
export const SupportCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const TitleCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;
export const BodyCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const SupportItem = styled.div`
    display: flex;
    jusitfy-content: center;
    flex-direction: column;
    border-bottom: 2px solid darkgray;
    border-radius: 20px;
    padding: calc(1rem * 1);
`;

// all sub-containters
export const SupportItemLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: -10px;
    border: 2px solid darkgray;
    border-radius: 20px;

    @media only screen and (max-width: 1000px) {
        padding: calc(1rem * 0.5);
        flex-direction: column;
    }
`;

// all titles
export const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    color: darkgray;

    @media only screen and (max-width: 1000px) {
        font-size: 30px;
    } 
`;
export const SupportItemTitle = styled.label`
    font-size: 30px;
    text-align: center;
    color: darkgray;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
`;

// all details
export const SupportItemDetails = styled.p`
    font-size: 25px;
    text-align: center;
    color: darkgray;
    margin-top: -10px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
`;

// all links
export const SupportItemLink = styled(Link)`
    font-size: 20px;
    text-align: center;
    color: darkgray;

    @media only screen and (max-width: 1000px) {
        font-size: 15px;
    }
`;