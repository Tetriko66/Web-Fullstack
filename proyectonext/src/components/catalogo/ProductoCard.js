import React from 'react';

function ProductoCard({ nombre, imagen, info, precio, precioNormal, oferta, otroMedio, onAgregar }) {
  return (
    <div className="card h-100 shadow">
      <img src={imagen} className="card-img-top p-3" alt={nombre} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text text-muted">{info}</p>
        <p className="text-success mb-1"><strong>{precio}</strong></p>
        <p className="text-decoration-line-through text-secondary mb-1">
          Precio normal: {precioNormal}
        </p>
        <p className="text-danger fw-bold mb-1">{oferta}</p>
        <p className="text-success mb-3">Otro medio de pago: {otroMedio}</p>
        <button type="button" className="btn btn-primary w-100 mt-auto" onClick={onAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;