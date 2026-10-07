import React, { useState } from 'react';
import logo from '../asset/watermarked_img_7179342786634952262.jpg';
import './Contacto.css'; // Importante: importar los estilos

function Contacto() {
    {/* Misma Validación del formulario de html */}
    const [formulario, setFormulario] = useState({ nombre: '', correo: '', mensaje: '' });
    const [errores, setErrores] = useState({});
    const [resultado, setResultado] = useState('');
  
    function actualizarCampo(event) {
      const { name, value } = event.target;
      setFormulario((anterior) => ({ ...anterior, [name]: value }));
      setErrores((anteriores) => ({ ...anteriores, [name]: '' }));
      setResultado('');
    }
  
    function validar_contacto(event) {
      event.preventDefault();
      const nombre = formulario.nombre.trim();
      const correo = formulario.correo.trim();
      const mensaje = formulario.mensaje.trim();
      const nuevosErrores = {};
  
      if (!nombre) nuevosErrores.nombre = 'Debe ingresar su nombre.';
      if (!correo) {
        nuevosErrores.correo = 'Debe ingresar su correo.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        nuevosErrores.correo = 'Correo inválido. Ejemplo: nombre@correo.cl';
      }
      if (!mensaje) {
        nuevosErrores.mensaje = 'Debe escribir un mensaje.';
      } else if (mensaje.length < 10) {
        nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
      }
  
      setErrores(nuevosErrores);
      setResultado('');
      if (Object.keys(nuevosErrores).length === 0) {
        setResultado('Formulario completado correctamente.');
        setFormulario({ nombre: '', correo: '', mensaje: '' });
      }
    }
    
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
        <form
            id="formularioContacto"
            className="body-contacto"
            onSubmit={validar_contacto}
            noValidate>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={actualizarCampo}
              required/>
              {errores.nombre && (
              <p id="errorNombre" className="text-danger" role="alert">
               {errores.nombre}
              </p>
          )}
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
              value={formulario.correo}
              onChange={actualizarCampo}
              placeholder="Ejemplo: nombre@correo.cl"
              required
            />
            {errores.correo && (
              <p id="errorCorreo" className="text-danger" role="alert">
                {errores.correo}
              </p>
            )}
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
              value={formulario.mensaje}
              onChange={actualizarCampo}
              required
            ></textarea>
            {errores.mensaje && (
            <p id="errorMensaje" className="text-danger" role="alert">
            {errores.mensaje}
            </p>
            )}
          </div>
            <p
            id="resultadoFormulario"
            className="text-success text-center mb-3"
            role="status">
            {resultado}
          </p>
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