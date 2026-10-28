import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { obtenerEncomienda, mensajeError } from '../api.js'
import { ESTADOS, tituloDe } from '../estados.js'

export default function Seguimiento() {
  const [params, setParams] = useSearchParams()

  const [codigo, setCodigo] = useState(params.get('codigo') || '')
  const [encomienda, setEncomienda] = useState(null)
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function buscar(cod) {
    setError('')
    setEncomienda(null)
    setCargando(true)
    try {
      const datos = await obtenerEncomienda(cod)
      setEncomienda(datos)
    } catch (err) {
      setError(mensajeError(err))
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    const cod = params.get('codigo')
    if (cod) {
      setCodigo(cod)
      buscar(cod)
    }
  }, [params])

  function enviarFormulario(e) {
    e.preventDefault()
    const limpio = codigo.trim().toUpperCase()
    if (!limpio) {
      setError('Ingresa un código de seguimiento.')
      return
    }
    setParams({ codigo: limpio })
  }

  const posicionActual = encomienda
    ? ESTADOS.findIndex((e) => e.clave === encomienda.estado)
    : -1

  function ubicacionDe(clave) {
    const paso = encomienda.historial.find((h) => h.estado === clave)
    return paso ? paso.ubicacion : null
  }

  return (
    <div>
      <h2 className="text-center mb-4">Estado de Encomienda</h2>

      <form className="input-group mb-4" onSubmit={enviarFormulario}>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese código de seguimiento"
          value={codigo}
          maxLength={20}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button className="btn btn-primary" disabled={cargando}>
          {cargando ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      {encomienda && (
        <>
          <p className="text-center text-muted">
            Para <strong>{encomienda.destinatario}</strong> · {encomienda.direccionDestino}
          </p>

          <div className="row g-3 mb-4">
            {ESTADOS.map((estado, i) => {
              // Pasado = gris, actual = verde, futuro = blanco
              let clase = 'tarjeta-estado'
              if (i < posicionActual) clase += ' pasado'
              if (i === posicionActual) clase += ' actual'

              return (
                <div className="col-6 col-md-3" key={estado.clave}>
                  <div className={`card text-center p-3 h-100 ${clase}`}>
                    <i className={`bi ${estado.icono} icono-estado`}></i>
                    <strong className="mt-2">{estado.titulo}</strong>
                    {ubicacionDe(estado.clave) && (
                      <small className="ubicacion">Ubicación: {ubicacionDe(estado.clave)}</small>
                    )}
                    <small className="text-muted mt-2">{estado.texto}</small>
                  </div>
                </div>
              )
            })}
          </div>

          <h3 className="h5 text-center mb-3">Historial de Viaje</h3>
          {encomienda.historial.map((paso, i) => (
            <div className="card mb-2" key={i}>
              <div className="card-body py-2">
                <strong>{tituloDe(paso.estado)}</strong>
                <div className="small">Fecha: {new Date(paso.fecha).toLocaleString('es-CL')}</div>
                <div className="small">Ubicación: {paso.ubicacion}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}