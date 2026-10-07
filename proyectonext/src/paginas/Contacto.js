import React from 'react';
import logo from '../asset/watermarked_img_7179342786634952262.jpg';
import './Contacto.css'; // Importante: importar los estilos

function Contacto() {
  return (
    <section className="container mt-5 mb-5">
      {/* Encabezado con Logo Centrado */}
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Logo LevelUp"
          width="160"
          height="90"
          className="d-block mx-auto img-fluid"
        />
        <h1 className="mt-3">LevelUp</h1>
      </div>

      {/* Cuadro del Formulario */}
      <div className="formulario-contacto mx-auto">
        {/* Franja superior del título */}
        <div className="header-contacto">
          <h2 className="m-0">FORMULARIO DE CONTACTOS</h2>
        </div>

        {/* Cuerpo del formulario */}
        <form className="body-contacto">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="nombre"
              name="nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              CORREO
            </label>
            <input
              type="email"
              className="form-control custom-input"
              id="correo"
              name="correo"
              placeholder="Ejemplo: nombre@correo.cl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensaje" className="form-label">
              MENSAJE
            </label>
            <textarea
              className="form-control custom-input"
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu consulta aquí"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-custom">
              ENVIAR MENSAJE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;