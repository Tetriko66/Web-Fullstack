import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomNav from '../components/customnav/CustomNav';
import Hero from '../components/Hero/Hero';
import Catalogo from '../components/catalogo/catalogo';
import Footer from '../components/Footer/footer';
import Nosotros from './Nosotros';
import Sucursal from './Sucursal';
import Contacto from './Contacto';


function Home() {
  return (
    <>
      <Hero />
      <Catalogo />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/Sucursal" element={<Sucursal />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;