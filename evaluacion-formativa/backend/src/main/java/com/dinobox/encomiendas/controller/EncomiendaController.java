package com.dinobox.encomiendas.controller;


import com.dinobox.encomiendas.dto.EncomiendaRequest;
import com.dinobox.encomiendas.dto.EncomiendaResponse;
import com.dinobox.encomiendas.dto.EstadoRequest;
import com.dinobox.encomiendas.service.EncomiendaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/encomienda")
@Tag(name = "Encomiendas", description = "Gestión y seguimiento de encomiendas Dinobox")
public class EncomiendaController {

    private final EncomiendaService service;

    public EncomiendaController(EncomiendaService service) {
        this.service = service;
    }

    @Operation(summary = "Registrar nueva encomienda",
            description = "Devuelve 201 con los datos y el código de seguimiento generado")
    @PostMapping
    public ResponseEntity<EncomiendaResponse> crear(@Valid @RequestBody EncomiendaRequest req) {
        EncomiendaResponse creada = service.crear(req);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{codigo}").buildAndExpand(creada.codigo()).toUri();
        return ResponseEntity.created(location).body(creada);
    }

    @Operation(summary = "Listar todas las encomiendas")
    @GetMapping
    public List<EncomiendaResponse> listar() {
        return service.listar();
    }

    @Operation(summary = "Consultar encomienda por código de seguimiento")
    @GetMapping("/{codigo}")
    public EncomiendaResponse obtener(@PathVariable String codigo) {
        return service.obtener(codigo);
    }

    @Operation(summary = "Actualizar el estado de la encomienda")
    @PutMapping("/{codigo}")
    public EncomiendaResponse actualizar(@PathVariable String codigo,
                                         @Valid @RequestBody EstadoRequest req) {
        return service.actualizarEstado(codigo, req);
    }

    @Operation(summary = "Eliminar una encomienda")
    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> eliminar(@PathVariable String codigo) {
        service.eliminar(codigo);
        return ResponseEntity.noContent().build();
    }
}