import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profile">
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="content pt-2">
        <Container>{children}</Container>
      </div>
    </>
  );
}

export default Layout;
