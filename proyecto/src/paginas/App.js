import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomNav from '../components/customnav/CustomNav';
import Hero from '../components/Hero/Hero';
import Catalogo from '../components/catalogo/catalogo';
import Footer from '../components/Footer/footer';
import Nosotros from './Nosotros';
import Sucursal from './Sucursal';
import Contacto from './Contacto';


function Home({ busqueda }) {
  return (
    <>
      <Hero />
      <Catalogo busqueda={busqueda} />
    </>
  );
}

function App() {
  const [busqueda, setBusqueda] = useState('');

  return (
  <div className="App">
    <CustomNav onBuscar={setBusqueda} />

    <main className="contenido-principal">
      <Routes>
        <Route path="/" element={<Home busqueda={busqueda} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/Sucursal" element={<Sucursal />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </main>

    <Footer />
  </div>
  );
}

export default App;