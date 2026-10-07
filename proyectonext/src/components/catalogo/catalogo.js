import React from 'react';
import "./catalogo.css"

function Catalogo() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Producto 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img
              src="https://assets.pcfactory.cl/public/foto/56193/5_500.jpg?t=1776701920373"
              className="card-img-top p-3"
              alt="Adata Memoria RAM DDR5"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                Adata® Memoria RAM DDR5 8GB 5600 MHz UDIMM BLACK
              </h5>
              <p className="card-text text-muted">
                ID: 52649 | Disponibilidad: +100 Unid.
              </p>
              <p className="text-success mb-1">
                <strong>$164.990</strong>
              </p>
              <p className="text-decoration-line-through text-secondary mb-1">
                Precio normal: $239.990
              </p>
              <p className="text-danger fw-bold mb-1">
                Oferta -31%: $164.990 (Transferencia/Débito)
              </p>
              <p className="text-success mb-3">
                Otro medio de pago: $173.690
              </p>
              <button type="button" className="btn btn-primary w-100 mt-auto">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img
              src="https://static.myshop.cl/myshop/fotos/2/8/2/9/4/d5_1789163023000.webp"
              className="card-img-top p-3"
              alt="Asus NVIDIA Dual GeForce RTX 3050"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                Asus® NVIDIA Dual GeForce RTX 3050 6GB OC Edition GDDR6
              </h5>
              <p className="card-text text-muted">
                ID: 45691 | Disponibilidad: +100 Unid.
              </p>
              <p className="text-success mb-1">
                <strong>$254.990</strong>
              </p>
              <p className="text-decoration-line-through text-secondary mb-1">
                Precio normal: $299.990
              </p>
              <p className="text-danger fw-bold mb-1">
                Oferta -15%: $254.990 (Transferencia/Débito)
              </p>
              <p className="text-success mb-3">
                Otro medio de pago: $268.890
              </p>
              <button type="button" className="btn btn-primary w-100 mt-auto">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <img
              src="https://media.falabella.com/falabellaCL/153463271_03/w=1200,h=1200,fit=pad"
              className="card-img-top p-3"
              alt="Gigabyte Fuente de poder 650W"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                MSI® Fuente de poder MSI MAG A650BN 650Watt 80+ Bronze
              </h5>
              <p className="card-text text-muted">
                ID: 35698 | Disponibilidad: +100 Unid.
              </p>
              <p className="text-success mb-1">
                <strong>$59.990</strong>
              </p>
              <p className="text-decoration-line-through text-secondary mb-1">
                Precio normal: $69.990
              </p>
              <p className="text-danger fw-bold mb-1">
                Oferta -14%: $59.990 (Transferencia/Débito)
              </p>
              <p className="text-success mb-3">
                Otro medio de pago: $63.190
              </p>
              <button type="button" className="btn btn-primary w-100 mt-auto">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;