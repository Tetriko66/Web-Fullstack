package com.dinobox.encomiendas.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record EncomiendaRequest(
        @NotBlank(message = "El remitente es obligatorio")
        @Size(max = 100, message = "El remitente admite hasta 100 caracteres")
        String remitente,

        @NotBlank(message = "El destinatario es obligatorio")
        @Size(max = 100, message = "El destinatario admite hasta 100 caracteres")
        String destinatario,

        @NotBlank(message = "La dirección de destino es obligatoria")
        @Size(max = 200, message = "La dirección admite hasta 200 caracteres")
        String direccionDestino,

        @Size(max = 255, message = "La descripción admite hasta 255 caracteres")
        String descripcion,

        @NotBlank(message = "La ubicación de recepción es obligatoria")
        @Size(max = 100, message = "La ubicación admite hasta 100 caracteres")
        String ubicacionRecepcion
) {}

