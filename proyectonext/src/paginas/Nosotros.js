import React from 'react';
import './Nosotros.css'; // Importante: importar el CSS aquí

function Nosotros() {
  return (
    <section id="nosotros" className="container mt-5">
      <div className="row align-items-center">
        {/* Columna de texto */}
        <div className="col-md-6">
          <h1 className="text-center mb-4">Nosotros</h1>
          <h3>Nuestra misión y valores</h3>
          <p>
            En <strong>LevelUp</strong>, nos enorgullecemos de la pasión con la que ejecutamos nuestros proyectos.
            Nuestra misión es ser una empresa innovadora, segura, ágil y cercana al cliente.
          </p>
          <p>
            Nuestra visión fundamental es buscar la mejora continua, el compromiso con la ética y la excelencia en el servicio al cliente.
            Queremos ser una empresa que crece y evoluciona para crear relaciones de largo plazo, construyendo una marca basada en la confianza.
          </p>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-6 text-center">
          <img 
            src="https://idesaa.edu.mx/blog/wp-content/uploads/2020/02/beneficios-trabajo-en-equipo-1000x666.jpg"
            alt="Trabajo en equipo"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;