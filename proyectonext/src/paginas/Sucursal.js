import React from 'react';

function Sucursal() {
  return (
    <section className="container mt-5">
      <h1 className="text-center mb-5">Tienda LevelUp en Santiago</h1>

      <div className="row info-sucursal">
        {/* Información */}
        <div className="col-md-4">
          <h2>Dirección</h2>
          <p className="mt-4">
            <strong>Metro - Av. Vicuña Mackenna 4917, 8970184 San Joaquín, Región Metropolitana</strong>
          </p>

          <h3>Horario de Atención</h3>
          <p className="mt-4">
            <strong>Lunes a Viernes: 9:00 AM - 6:00 PM</strong>
          </p>
          <p>
            <strong>Sábado: 10:00 AM - 4:00 PM</strong>
          </p>
          <p>
            <strong>Domingo: Cerrado</strong>
          </p>

          <p className="mt-4">
            <strong>📞 Teléfono: +56 9 1234 5678</strong>
          </p>
          <p>
            <strong>📨 Correo: contacto@LevelUp.cl</strong>
          </p>
          <p className="mt-4">
            <strong>Venta de productos tecnológicos, accesorios y atención general.</strong>
          </p>
        </div>

        {/* Mapa */}
        <div className="col-md-8">
          <iframe
            title="Ubicación Tienda LevelUp"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.5088453682245!2d-70.61636612893425!3d-33.50091685587314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00be4a5fa81%3A0xcd8eaf5b1d547f64!2sDuoc%20UC%3A%20Sede%20San%20Joaqu%C3%ADn!5e0!3m2!1ses-419!2scl!4v1787530868984!5m2!1ses-419!2scl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Sucursal;