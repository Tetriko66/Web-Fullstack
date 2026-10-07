import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../asset/watermarked_img_7179342786634952262.jpg';
import './CustomNav.css';
import { Link } from 'react-router-dom';

function CustomNav() {
  return (
    <Navbar expand='lg' className='navbar-imperio' data-bs-theme="dark">
      <Container fluid className='ps-2'>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="50"
            className="d-inline-block align-top"
            alt="TecnoLab"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Nosotros'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Sucursal'>Sucursal</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Contacto'>Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;