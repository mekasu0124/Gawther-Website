import React from 'react';
import {
    SupportCont,
    TitleCont,
    BodyCont,
    SupportItem,
    Title,
    SupportItemTitle,
    SupportItemDetails,
    SupportItemLinks,
    SupportItemLink
} from '../styles/support.style';


function support() {
  return (
    <SupportCont className="container-fluid">
        <TitleCont className="container">
            <Title>In Need Of Support?</Title>
        </TitleCont>
        <BodyCont className="container-fluid">
            <SupportItem className="container-fluid">
                <SupportItemTitle>Account Problems?</SupportItemTitle>
                <SupportItemDetails>
                    For all problems related to account issues and their solutions
                </SupportItemDetails>
                <SupportItemLinks className="container-fluid">
                    <SupportItemLink to="/support">Support Link 1</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 2</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 3</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                </SupportItemLinks>
            </SupportItem>
            <SupportItem className="container-fluid">
                <SupportItemTitle>Club Problems?</SupportItemTitle>
                <SupportItemDetails>
                    For all problems related to your club account issues and their solutions
                </SupportItemDetails>
                <SupportItemLinks className="container-fluid">
                    <SupportItemLink to="/support">Support Link 1</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 2</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 3</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                </SupportItemLinks>
            </SupportItem>
            <SupportItem className="container-fluid">
                <SupportItemTitle>Gaming Problems?</SupportItemTitle>
                <SupportItemDetails>
                    For all problems related to problems with games and their solutions
                </SupportItemDetails>
                <SupportItemLinks className="container-fluid">
                    <SupportItemLink to="/support">Support Link 1</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 2</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 3</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                </SupportItemLinks>
            </SupportItem>
            <SupportItem className="container-fluid">
                <SupportItemTitle>Discord Problems?</SupportItemTitle>
                <SupportItemDetails>
                    For all problems related to the discord extension issues and their solutions
                </SupportItemDetails>
                <SupportItemLinks className="container-fluid">
                    <SupportItemLink to="/support">Support Link 1</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 2</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 3</SupportItemLink>
                    <SupportItemLink to="/support">Support Link 4</SupportItemLink>
                </SupportItemLinks>
            </SupportItem>
        </BodyCont>
    </SupportCont>
  );
}

export default support;