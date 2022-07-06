import styled from 'styled-components';
import { Link } from 'react-router-dom';


// all containers
export const SignupForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

// all sub-containers
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
`;
export const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const FormBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    padding: calc(1rem * 1);
    background: linear-gradient(
        145deg,
        darkgray,
        black,
        darkgray
    );

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
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
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 80%;
        margin-left: auto;
        marginr-right: auto;
    }
`;

// all form body containers
export const FormBoxOne = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const BoxHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;
export const BoxBody = styled.div`
    display: flex;
    jusitfy-content: center;
    flex-direction: column;
`;
export const FormItems = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const Select = styled.select`
    font-size: 20px;
    padding: calc(1rem*1);
    text-align: center;
    border-radius: 20px;
    border: 2px solid black;
    width: 87%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width:1000px) {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const One = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Two = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Three = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Four = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Five = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Six = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Seven = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Eight = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Nine = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;
export const Ten = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;

// all titles
export const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    color: darkgray;

    @media only screen and (max-width: 1000px) {
        font-size: 25px;
    }
`;
export const Title2 = styled.h2`
    font-size: 35px;
    text-decoration: underline;
    color: silver;
    text-align: center;
`;
export const Title3 = styled.h3`
    font-size: 30px;
    text-align: left;
    color: silver;
    text-decoration: underline;
`;

// all labels
export const Label = styled.label`
    font-size: 30px;
    text-align: left;
    color: darkgray;
    width: 50%;

    @media only screen and (max-width:1000px) {
        font-size: 25px;
        width: 80%;
    }
`;
export const Label2 = styled.label`
    font-size: 30px;
    text-align: center;
    color: darkgray;
    width: 80%;

    @media only screen and (max-width:1000px) {
        font-size: 20px;
        margin-top: -10px;
        margin-bottom: 10px;
    }
`;
export const Span = styled.span`
    color: red;
    font-size: 20px;
`;

// all buttons
export const Button = styled.button`
    font-size: 30px;
    text-align: center;
    background: transparent;
    color: darkgray;
    border: 2px solid darkgray;
    border-radius: 20px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: calc(1rem * 1);
    }
`;

// all links
export const Links = styled(Link)`
    font-size: 30px;
    text-align: center;
    color: darkgray;
    margin-top: 10px;   
`;

// all inputs
export const Input = styled.input`
    font-size: 20px;
    text-align: center;
    padding: calc(1rem * 1);
    border-radius: 20px;
    border: 2px solid black;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;
export const Option = styled.option`
    font-size: 20px;
    text-align: center;
    border-radius: 20px;
    border: 2px solid black;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;