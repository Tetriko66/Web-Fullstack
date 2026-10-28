import { useState } from 'react'
import { Link } from 'react-router-dom'
import { crearEncomienda, mensajeError } from '../api.js'

const formVacio = {
  remitente: '',
  destinatario: '',
  direccionDestino: '',
  ubicacionRecepcion: '',
  descripcion: '',
}

export default function NuevaEncomienda() {
  const [form, setForm] = useState(formVacio)
  const [errores, setErrores] = useState({})
  const [errorServidor, setErrorServidor] = useState('')
  const [creada, setCreada] = useState(null)
  const [enviando, setEnviando] = useState(false)

  function cambiar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Revisa que los campos obligatorios no estén vacíos
  function validar() {
    const nuevos = {}
    if (!form.remitente.trim()) nuevos.remitente = 'Ingresa el nombre del remitente'
    if (!form.destinatario.trim()) nuevos.destinatario = 'Ingresa el nombre del destinatario'
    if (!form.direccionDestino.trim()) nuevos.direccionDestino = 'Ingresa la dirección de destino'
    if (!form.ubicacionRecepcion.trim()) nuevos.ubicacionRecepcion = 'Ingresa la sucursal de recepción'
    return nuevos
  }

  async function enviar(e) {
    e.preventDefault()
    setErrorServidor('')

    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    setEnviando(true)
    try {
      const respuesta = await crearEncomienda(form)
      setCreada(respuesta)
      setForm(formVacio)
    } catch (err) {
      setErrorServidor(mensajeError(err))
    } finally {
      setEnviando(false)
    }
  }

  // Cuando se crea, mostramos el código de seguimiento
  if (creada) {
    return (
      <div className="card text-center p-4">
        <h2 className="h4">¡Encomienda registrada!</h2>
        <p className="text-muted">Guarda este código para seguir tu envío:</p>
        <div className="codigo-seguimiento mb-3">{creada.codigo}</div>

        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigator.clipboard.writeText(creada.codigo)}
          >
            Copiar código
          </button>
          <Link className="btn btn-primary" to={`/?codigo=${creada.codigo}`}>
            Ver estado
          </Link>
          <button className="btn btn-success" onClick={() => setCreada(null)}>
            Enviar otra
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={enviar} className="card p-4" noValidate>
      <h2 className="h4 mb-3">Enviar encomienda</h2>

      <div className="mb-3">
        <label className="form-label" htmlFor="remitente">Remitente</label>
        <input
          id="remitente"
          name="remitente"
          className={`form-control ${errores.remitente ? 'is-invalid' : ''}`}
          value={form.remitente}
          maxLength={100}
          onChange={cambiar}
        />
        <div className="invalid-feedback">{errores.remitente}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="destinatario">Destinatario</label>
        <input
          id="destinatario"
          name="destinatario"
          className={`form-control ${errores.destinatario ? 'is-invalid' : ''}`}
          value={form.destinatario}
          maxLength={100}
          onChange={cambiar}
        />
        <div className="invalid-feedback">{errores.destinatario}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="direccionDestino">Dirección de destino</label>
        <input
          id="direccionDestino"
          name="direccionDestino"
          className={`form-control ${errores.direccionDestino ? 'is-invalid' : ''}`}
          value={form.direccionDestino}
          maxLength={200}
          onChange={cambiar}
        />
        <div className="invalid-feedback">{errores.direccionDestino}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="ubicacionRecepcion">Sucursal de recepción</label>
        <input
          id="ubicacionRecepcion"
          name="ubicacionRecepcion"
          className={`form-control ${errores.ubicacionRecepcion ? 'is-invalid' : ''}`}
          value={form.ubicacionRecepcion}
          maxLength={100}
          onChange={cambiar}
        />
        <div className="invalid-feedback">{errores.ubicacionRecepcion}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="descripcion">Descripción (opcional)</label>
        <input
          id="descripcion"
          name="descripcion"
          className="form-control"
          value={form.descripcion}
          maxLength={255}
          onChange={cambiar}
        />
      </div>

      {errorServidor && <div className="alert alert-danger">{errorServidor}</div>}

      <button className="btn btn-success" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Registrar encomienda'}
      </button>
    </form>
  )
}