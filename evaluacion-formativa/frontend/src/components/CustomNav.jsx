import { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// 1. Eliminamos el import problemático: import Logo from "./Logo.jsx"

// 2. Importamos directamente la imagen del logo.
// Asegúrate de que tu imagen se llame 'logo-dinobox.jpg' (o .png) y esté en 'src/assets/'
import logoImg from '../assets/logo-dinobox.jpg' 

import './CustomNav.css'

function CustomNav() {
  const [codigo, setCodigo] = useState('')
  const navigate = useNavigate()

  function buscar(event) {
    event.preventDefault()
    const limpio = codigo.trim().toUpperCase()
    if (!limpio) return
    navigate(`/seguimiento?codigo=${limpio}`)
    setCodigo('')
  }

  return (
    <Navbar expand="lg" className="navbar-imperio" data-bs-theme="dark">
      <Container fluid className="px-3">
        {/* Marca Dinobox */}
        <Navbar.Brand as={Link} to="/" className="brand-dinobox">
          
          {/* 3. Colocamos la imagen directamente aquí y ajustamos su tamaño */}
          <img 
            src={logoImg} 
            alt="Dinobox Logo" 
            width="50" // Puedes cambiar este número (en pixeles) para ajustar el tamaño
            height="auto"
            style={{ objectFit: 'contain', borderRadius: '6px' }} 
          />
          
          {/* Texto al lado del logo */}
          <span className="ms-2">Dinobox</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Botones de navegación estilizados */}
          <Nav className="me-auto ms-lg-3 nav-pills-custom gap-1 my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" end>
              <i className="bi bi-house-door"></i> Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/seguimiento">
              <i className="bi bi-search"></i> Seguir encomienda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/enviar">
              <i className="bi bi-send"></i> Enviar encomienda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/actualizar">
              <i className="bi bi-arrow-repeat"></i> Actualizar estado
            </Nav.Link>
          </Nav>

          {/* Formulario de búsqueda rápida */}
          <form className="d-flex gap-2" role="search" onSubmit={buscar}>
            <input
              id="buscador"
              type="search"
              className="form-control"
              placeholder="Código de seguimiento"
              aria-label="Código de seguimiento"
              maxLength={20}
              value={codigo}
              onChange={(event) => setCodigo(event.target.value)}
            />
            <button type="submit" className="btn btn-outline-light px-3">
              Buscar
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNav