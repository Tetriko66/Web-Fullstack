import { Routes, Route } from 'react-router-dom'
import CustomNav from './components/CustomNav.jsx'
import Footer from './components/Footer.jsx'
import Home from './paginas/Home.jsx'
import Seguimiento from './paginas/Seguimiento.jsx'
import NuevaEncomienda from './paginas/NuevaEncomienda.jsx'
import ActualizarEstado from './paginas/ActualizarEstado.jsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNav />

      <main className="container py-4 flex-grow-1" style={{ maxWidth: 900 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/enviar" element={<NuevaEncomienda />} />
          <Route path="/actualizar" element={<ActualizarEstado />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}