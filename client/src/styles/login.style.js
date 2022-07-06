import styled from 'styled-components';
import { Link } from 'react-router-dom';


// all containers
export const LoginForm = styled.div`
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
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: calc(1rem * 2);
    background: linear-gradient(
        145deg,
        darkgray,
        black,
        darkgray
    );
    border-radius: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;

    @media only screen and (max-width: 1000px) {
        padding: calc(1rem * 0.5);
        width: 90%;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;
export const FormBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const FormFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding: calc(1rem * 1);
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

// all titles
export const Title = styled.h1`
    font-size: 40px;
    color: darkgray;
    text-align: center;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
`;

// all labels
export const Label = styled.label`
    font-size: 30px;
    color: darkgray;
    text-align: center;
    margin-bottom: 10px;
`;

export const Label2 = styled.label`
    font-size: 25px;
    color: darkgray;
    text-align: center;

    @media only screen and (max-width:1000px) {
        font-size: 30px;
    }
`;

// all inputs
export const Input = styled.input`
    font-size: 25px;
    color: black;
    background-color: darkgray;
    border: 2px solid black;
    border-radius: 20px;
    text-align: center;
    padding: calc(1rem*0.5);
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width:1000px) {
        font-size: 30px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

// all links
export const Links = styled(Link)`
    font-size: 30px;
    text-align: center;
    color: darkgray;
    margin-top: 10px;
`;

// all buttons
export const Button = styled.button`
    font-size: 30px;
    background: transparent;
    border: 2px solid darkgray;
    border-radius: 20px;
    padding: calc(1rem * 1);
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    color: darkgray;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;