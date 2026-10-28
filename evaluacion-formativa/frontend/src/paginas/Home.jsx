import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-dinobox.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container py-4">
      {/* Hero Section con el Logo */}
      <div className="hero-section text-center mb-5">
        <div className="logo-wrapper mb-3">
          <img 
            src={logoImg} 
            alt="Dinobox Logo" 
            className="home-logo"
          />
        </div>
        <h1 className="fw-bold text-dark mb-2 display-5">Bienvenido a Dinobox</h1>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '650px' }}>
          Tu plataforma de confianza para gestionar, enviar y rastrear encomiendas en tiempo real de forma rápida, segura y sencilla.
        </p>
      </div>

      {/* Tarjetas de Acceso Rápido */}
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-5 col-lg-4">
          <div className="card feature-card h-100 border-0 p-4">
            <div className="card-body text-center">
              <div className="icon-box bg-primary-subtle text-primary mb-3">
                <i className="bi bi-search fs-3"></i>
              </div>
              <h3 className="h4 fw-bold mb-2">Seguir Encomienda</h3>
              <p className="text-muted small mb-4">
                Rastrea el estado actual, historial y ubicación exacta de tu paquete ingresando tu código de seguimiento.
              </p>
              <Link to="/seguimiento" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm">
                Rastrear ahora
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-lg-4">
          <div className="card feature-card h-100 border-0 p-4">
            <div className="card-body text-center">
              <div className="icon-box bg-success-subtle text-success mb-3">
                <i className="bi bi-plus-circle fs-3"></i>
              </div>
              <h3 className="h4 fw-bold mb-2">Enviar Encomienda</h3>
              <p className="text-muted small mb-4">
                Registra un nuevo envío completando fácilmente los datos del remitente, destino y sucursal.
              </p>
              <Link to="/enviar" className="btn btn-success w-100 py-2 fw-semibold shadow-sm">
                Crear nuevo envío
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Informativa / Ventajas */}
      <div className="row text-center g-4 py-3 border-top border-light-subtle">
        <div className="col-md-4">
          <div className="p-3">
            <i className="bi bi-lightning-charge fs-3 text-warning mb-2 d-block"></i>
            <h5 className="fw-bold">Tiempo Real</h5>
            <p className="text-muted small mb-0">Actualizaciones instantáneas en cada cambio de estado de tu paquete.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3">
            <i className="bi bi-shield-check fs-3 text-info mb-2 d-block"></i>
            <h5 className="fw-bold">Envíos Seguros</h5>
            <p className="text-muted small mb-0">Control total sobre las sucursales de recepción y entrega final.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3">
            <i className="bi bi-headset fs-3 text-primary mb-2 d-block"></i>
            <h5 className="fw-bold">Fácil de Usar</h5>
            <p className="text-muted small mb-0">Interfaz optimizada para que gestiones todo en pocos clics.</p>
          </div>
        </div>
      </div>
    </div>
  )
}