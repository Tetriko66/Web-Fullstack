import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/encomienda',
  headers: { 'Content-Type': 'application/json' },
})

export const crearEncomienda = (datos) =>
  api.post('', datos).then((r) => r.data)

export const obtenerEncomienda = (codigo) =>
  api.get(`/${codigo}`).then((r) => r.data)

export const listarEncomiendas = () =>
  api.get('').then((r) => r.data)

export const actualizarEstado = (codigo, datos) =>
  api.put(`/${codigo}`, datos).then((r) => r.data)

export function mensajeError(err) {
  if (!err.response) {
    return 'No se pudo conectar con el servidor. Revisa que el backend esté encendido.'
  }
  const datos = err.response.data
  if (datos?.errores) return Object.values(datos.errores).join('. ')
  return datos?.mensaje || 'Ocurrió un error inesperado.'
}