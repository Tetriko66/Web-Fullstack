package com.dinobox.encomiendas.dto;

import com.dinobox.encomiendas.model.Encomiendas;
import com.dinobox.encomiendas.model.Estado;

import java.time.LocalDateTime;
import java.util.List;

public record EncomiendaResponse(
        String codigo,
        String remitente,
        String destinatario,
        String direccionDestino,
        String descripcion,
        Estado estado,
        String ubicacionActual,
        LocalDateTime fechaCreacion,
        List<Hito> historial
) {

    // Un paso del "Historial de Viaje"
    public record Hito(Estado estado, String ubicacion, LocalDateTime fecha) {}

    // Convierte la entidad en la respuesta que ve el frontend
    public static EncomiendaResponse from(Encomiendas e) {
        List<Hito> hitos = e.getHistorial().stream()
                .map(h -> new Hito(h.getEstado(), h.getUbicacion(), h.getFecha()))
                .toList();

        return new EncomiendaResponse(
                e.getCodigo(),
                e.getRemitente(),
                e.getDestinatario(),
                e.getDireccionDestino(),
                e.getDescripcion(),
                e.getEstado(),
                e.getUbicacionActual(),
                e.getFechaCreacion(),
                hitos
        );
    }
}