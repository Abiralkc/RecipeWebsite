import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../GlobalStyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';
const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}> 
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Home Made
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/recipe">Recipes</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary>Order Now</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;