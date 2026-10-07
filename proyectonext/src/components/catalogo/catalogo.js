import React, { useState } from 'react';
import "./catalogo.css"
import ProductoCard from './ProductoCard';

const productos = [
  {
    id: 52649,
    nombre: 'Adata® Memoria RAM DDR5 8GB 5600 MHz UDIMM BLACK',
    imagen: 'https://assets.pcfactory.cl/public/foto/56193/5_500.jpg?t=1776701920373',
    info: 'ID: 52649 | Disponibilidad: +100 Unid.',
    precio: '$164.990',
    precioNormal: '$239.990',
    oferta: 'Oferta -31%: $164.990 (Transferencia/Débito)',
    otroMedio: '$173.690',
  },
  {
    id: 45691,
    nombre: 'Asus® NVIDIA Dual GeForce RTX 3050 6GB OC Edition GDDR6',
    imagen: 'https://static.myshop.cl/myshop/fotos/2/8/2/9/4/d5_1789163023000.webp',
    info: 'ID: 45691 | Disponibilidad: +100 Unid.',
    precio: '$254.990',
    precioNormal: '$299.990',
    oferta: 'Oferta -15%: $254.990 (Transferencia/Débito)',
    otroMedio: '$268.890',
  },
  {
    id: 35698,
    nombre: 'MSI® Fuente de poder MSI MAG A650BN 650Watt 80+ Bronze',
    imagen: 'https://media.falabella.com/falabellaCL/153463271_03/w=1200,h=1200,fit=pad',
    info: 'ID: 35698 | Disponibilidad: +100 Unid.',
    precio: '$59.990',
    precioNormal: '$69.990',
    oferta: 'Oferta -14%: $59.990 (Transferencia/Débito)',
    otroMedio: '$63.190',
  },
];

function Catalogo() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="container my-4">
      <p className="text-end fw-bold" data-testid="contador">
        🛒 Carrito: {cantidad}
      </p>
      <div className="row">
        {productos.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4 mb-4">
            <ProductoCard {...p} onAgregar={() => setCantidad(cantidad + 1)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
