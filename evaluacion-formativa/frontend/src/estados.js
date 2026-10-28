export const ESTADOS = [
  { clave: 'EN_RECEPCION', titulo: 'En Recepción', icono: 'bi-box2', texto: 'Tu encomienda fue recibida y se está preparando.' },
  { clave: 'EN_DESPACHO', titulo: 'En Despacho', icono: 'bi-truck', texto: 'La encomienda se está preparando para salir.' },
  { clave: 'EN_TRANSITO', titulo: 'En Tránsito', icono: 'bi-airplane', texto: 'Tu encomienda va en camino a su destino.' },
  { clave: 'ENTREGADO', titulo: 'Entregado', icono: 'bi-check-circle-fill', texto: 'La encomienda ya fue entregada.' },
]

export function tituloDe(clave) {
  const estado = ESTADOS.find((e) => e.clave === clave)
  return estado ? estado.titulo : clave
}