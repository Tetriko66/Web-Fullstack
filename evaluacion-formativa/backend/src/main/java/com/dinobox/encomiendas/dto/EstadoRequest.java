package com.dinobox.encomiendas.dto;

import com.dinobox.encomiendas.model.Estado;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record EstadoRequest(
        @NotNull(message = "El estado es obligatorio")
        Estado estado,

        @NotBlank(message = "La ubicación es obligatoria")
        @Size(max = 100, message = "La ubicación admite hasta 100 caracteres")
        String ubicacion
) {}