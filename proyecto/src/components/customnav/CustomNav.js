import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../asset/watermarked_img_7179342786634952262.jpg';
import './CustomNav.css';
import { Link, useNavigate} from 'react-router-dom';

function CustomNav({ onBuscar }) {
  const [termino, setTermino] = useState('');
  const navigate = useNavigate();

  function checkear_formulario(event) {
    event.preventDefault();
    onBuscar(termino.toLowerCase().trim());
    navigate('/');
  }

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
        <form
        className="d-flex gap-2"
        role="search"
        onSubmit={checkear_formulario}>
        <input
        id="buscador"
        type="search"
        className="form-control"
        placeholder="Buscar productos"
        aria-label="Buscar productos"
        value={termino}
        onChange={(event) => setTermino(event.target.value)}/>

        <button type="submit" className="btn btn-outline-light">
        Buscar
        </button>
        </form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;