import React, { useState } from 'react';

// Components
import { Nav, NavContainer, NavLogo, NavLogoIcon, MobileMenuContainer, CrossIcon, MenuIcon, MenuContainer, MenuLinks, NavMenuButton } from './NavBarElements';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => { setIsOpen(!isOpen) }

    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/"><NavLogoIcon /> ULTRA</NavLogo>

                <MobileMenuContainer onClick={toogleMenu}>
                    {isOpen ? <CrossIcon /> : <MenuIcon />}
                </MobileMenuContainer>
                <MenuContainer isOpen={isOpen}>
                    <MenuLinks to="/">Home</MenuLinks>
                    <MenuLinks to="/products">Products</MenuLinks>
                    <MenuLinks to="/services">Services</MenuLinks>
                    <MenuLinks to="/about">About</MenuLinks>
                    <NavMenuButton big onClick={toogleMenu}>SIGN UP</NavMenuButton>
                </MenuContainer>
            </NavContainer>
        </Nav>
    )
}

export default NavBar;