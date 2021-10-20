import React, { useState } from "react";
import Logo from '../Header/Assets/Images/Logo.png';
import { Link, NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand color="white">
         <NavLink tag={Link} exact to="/" >
        <img style={{width:'100px',height:'40px',paddin:'10px'}}
            src={Logo}/></NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="justify-content-end"
              style={{ width: "100%" }}
              navbar>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
