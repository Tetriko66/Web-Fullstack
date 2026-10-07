import React from 'react';
import "./catalogo.css"

const productos = [
  {
    id: 52649,
    nombre: 'Adata® Memoria RAM DDR5 8GB 5600 MHz UDIMM BLACK',
    imagen: 'https://assets.pcfactory.cl/public/foto/56193/5_500.jpg?t=1776701920373',
    alt: 'Adata Memoria RAM DDR5',
    disponibilidad: '+100 Unid.',
    precio: '$164.990',
    precioNormal: '$239.990',
    descuento: '-31%',
    otroPago: '$173.690',
  },
  {
    id: 45691,
    nombre: 'Asus® NVIDIA Dual GeForce RTX 3050 6GB OC Edition GDDR6',
    imagen: 'https://static.myshop.cl/myshop/fotos/2/8/2/9/4/d5_1789163023000.webp',
    alt: 'Asus NVIDIA Dual GeForce RTX 3050',
    disponibilidad: '+100 Unid.',
    precio: '$254.990',
    precioNormal: '$299.990',
    descuento: '-15%',
    otroPago: '$268.890',
  },
  {
    id: 35698,
    nombre: 'MSI® Fuente de poder MSI MAG A650BN 650Watt 80+ Bronze',
    imagen: 'https://media.falabella.com/falabellaCL/153463271_03/w=1200,h=1200,fit=pad',
    alt: 'MSI Fuente de poder 650W',
    disponibilidad: '+100 Unid.',
    precio: '$59.990',
    precioNormal: '$69.990',
    descuento: '-14%',
    otroPago: '$63.190',
  },
];

function Catalogo({ busqueda = '' }) {
  const palabra = busqueda.toLowerCase().trim();
  
  // Filtra según el texto visible de cada tarjeta.
  const productosFiltrados = productos.filter((producto) => {
    const texto = `
      ${producto.nombre}
      ID: ${producto.id} | Disponibilidad: ${producto.disponibilidad}
      ${producto.precio}
      Precio normal: ${producto.precioNormal}
      Oferta ${producto.descuento}: ${producto.precio} (Transferencia/Débito)
      Otro medio de pago: ${producto.otroPago}
      Agregar al carrito
    `.toLowerCase();

    return palabra === '' || texto.includes(palabra);
  });

  return (
    <div className="container my-4">
      <p
        id="mensajeBusqueda"
        className="text-center text-danger"
        role="status"
        aria-live="polite"
      >
        {productosFiltrados.length === 0 && palabra !== ''
          ? 'No se encontraron productos que coincidan con la búsqueda.'
          : ''}
      </p>

      <div className="row">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={producto.imagen}
                className="card-img-top p-3"
                alt={producto.alt}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>

                <p className="card-text text-muted">
                  ID: {producto.id} | Disponibilidad: {producto.disponibilidad}
                </p>

                <p className="text-success mb-1">
                  <strong>{producto.precio}</strong>
                </p>

                <p className="text-decoration-line-through text-secondary mb-1">
                  Precio normal: {producto.precioNormal}
                </p>

                <p className="text-danger fw-bold mb-1">
                  Oferta {producto.descuento}: {producto.precio}
                  {' '}(Transferencia/Débito)
                </p>

                <p className="text-success mb-3">
                  Otro medio de pago: {producto.otroPago}
                </p>

                <button
                  type="button"
                  className="btn btn-primary w-100 mt-auto"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;