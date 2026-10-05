import './Hero.css';
import logo from '../../asset/watermarked_img_7179342786634952262.jpg';

function Hero() {
  return (
    <section id="Hero" className="container mt-5">
      <div className="row align-items-center">
        {/* Columna izquierda: texto */}
        <div className="col-md-6 text-start">
          <h1>Tienda Online</h1>
          <h2>
            Bienvenido a LevelUp<br />
            Tu aliado en tecnología.<br />
            Encuentra los mejores productos de computación para tu hogar o negocio, 
            con atención personalizada y entrega rápida.<br />
            Conectamos innovación y confianza, online y presencial.
          </h2>
          <button className="btn-landing">Explorar Productos</button>
        </div>

        {/* Columna derecha: imagen */}
        <div className="col-md-6 text-center">
          <img 
            src={logo} 
            width="300"
            alt="Landing" 
            className="img-fluid" 
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;