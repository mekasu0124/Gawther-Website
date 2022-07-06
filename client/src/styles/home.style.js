import styled from 'styled-components';
import { Link } from 'react-router-dom';


// all containers
export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const HeaderCont = styled.div`
    color: silver;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const BodyCont = styled.div`
    color: silver;
    margin-top: -20px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`;
export const FooterCont = styled.div`
    color: silver;
    padding: calc(1rem * 2);
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 20px 20px 0 0;
    background: grey;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    @media only screen and (max-width: 1000px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: calc(1rem * 0.5);
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
`;

// all sub-containers
export const BoxA = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
`;
export const BoxB = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const BoxC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
`;

// all titles
export const Title = styled.h1`
    font-size: 40px;
    text-align: center;

    @media only screen and (max-width: 1000px) {
        font-size: 25px;
        letter-spacing: 1px;
    }
`;
export const Title2 = styled.h2`
    font-size: 30px;
    text-align: center;

    @media only screen and (max-width: 1000px) {
        font-size: 25px;
        letter-spacing: 1px;
    }
`;
export const Title3 = styled.h3`
    font-size: 30px;
    text-align: center;

    @media only screen and (max-width: 1000px) {
        font-size: 25px;
        letter-spacing: 1px;
    }
`;
export const Title4 = styled.h4`
    font-size: 25px;
    text-align: center;
    margin-top: -30px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        letter-spacing: 1px;
    }
`;

// all sub-titles
export const SubTitle = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: -20px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;

// all paragraphs
export const Descrip = styled.p`
    font-size: 25px;
    border-bottom: 1px solid silver; 
    text-align: center;
    margin-top: -10px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;
export const Descrip2 = styled.p`
    font-size: 25px;
    border-bottom: 1px solid silver;
    margin-top: -10px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        font-size: 18px;
    }
`;

// all links
export const Links = styled(Link)`
    color: silver;
    font-size: 25px;
    text-align: center;
`;

// all images
export const Image = styled.img`
    width: 60%;
    height: 150px;
    border: 5px solid black;
    border-radius: 20px;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
`;