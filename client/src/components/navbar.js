import React from 'react';
import logo from '../images/logos/logo.svg';
import {
    Navbar,
    NavbarLinkContainer,
    NavbarImageContainer,
    NavbarLink,
    Image
} from '../styles/navbar.style';


function navbar() {
  return (
    <Navbar className="container-fluid">
        <NavbarLinkContainer className="container">
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/">Forums</NavbarLink>
            <NavbarLink to="/login">Login</NavbarLink>
            <NavbarLink to="/signup">Signup</NavbarLink>
            <NavbarLink to="/support">Support</NavbarLink>
        </NavbarLinkContainer>
        <NavbarImageContainer className="container">  
            <Image src={logo} alt="gawther logo" />
        </NavbarImageContainer>
    </Navbar>
  );
}

export default navbar;