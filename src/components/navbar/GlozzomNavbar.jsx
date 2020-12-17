import React, { useState } from 'react';
import {Link} from  'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';



const GlozzomNavbar = (props) => {
  const [click, setClick] = useState(false);

  const toggle = () => setClick(!click);
  const closeMenu = () => setClick(false)


  return (
    <>
      <Navbar expand="md" className = "navbar navbar-dark fixed-top p-1" style = {{backgroundColor: "#000000"}} >
        <div className = "container">
        <Link to="/" className = "navbar-brand">Glozzom</Link>
          <NavbarToggler onClick={toggle}>
            <i className = {click ? "fas fa-times" : "fas fa-bars"}/>
          </NavbarToggler>
          <Collapse isOpen={click} navbar >
            <Nav className="ml-auto text-uppercase" navbar style = {{fontSize: ".90rem"}} >
              <NavItem>
                <Link className = "nav-link" to="/" onClick = {closeMenu}>home</Link>
              </NavItem>
              <NavItem>
                <Link className = "nav-link" to="/about" onClick = {closeMenu}>about us</Link>
              </NavItem>
              <NavItem>
                <Link className = "nav-link" to="/services" onClick = {closeMenu}>services</Link>
              </NavItem>
              <NavItem>
                <Link className = "nav-link" to="/blog" onClick = {closeMenu}>blog</Link>
              </NavItem>
              <NavItem>
                <Link className = "nav-link" to="/contact" onClick = {closeMenu}>contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
      </Navbar>
    </>
  );
}

export default GlozzomNavbar;
