import React, { useState } from "react";
// import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import styled from "styled-components";

import LogoAnimated from '../LogoAnimated';

const CustomNavBar = styled(Navbar)`
  background: teal;
`;

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <CustomNavBar color="teal" dark expand="md">
        <LogoAnimated color='contrast' nav={true}/>
        <NavbarBrand href="">Med Cabinet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Find Strains</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">My List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Settings</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </CustomNavBar>
    </div>
  );
};

export default NavBar;
