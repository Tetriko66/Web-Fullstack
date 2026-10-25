package com.dinobox.encomiendas.service;


import com.dinobox.encomiendas.dto.EncomiendaRequest;
import com.dinobox.encomiendas.dto.EncomiendaResponse;
import com.dinobox.encomiendas.dto.EstadoRequest;
import com.dinobox.encomiendas.exception.EncomiendaNoEncontradaException;
import com.dinobox.encomiendas.exception.ReglaNegocioException;
import com.dinobox.encomiendas.model.Encomiendas;
import com.dinobox.encomiendas.model.Estado;
import com.dinobox.encomiendas.repository.EncomiendasRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class EncomiendaService {

    // Letras y números sin caracteres confusos (sin 0/O ni 1/I)
    private static final String ALFABETO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    private static final SecureRandom RANDOM = new SecureRandom();

    private final EncomiendasRepository repo;

    public EncomiendaService(EncomiendasRepository repo) {
        this.repo = repo;
    }

    // CREAR: guarda la encomienda en EN_RECEPCION con un código único
    public EncomiendaResponse crear(EncomiendaRequest req) {
        Encomiendas e = new Encomiendas();
        e.setCodigo(generarCodigoUnico());
        e.setRemitente(req.remitente().trim());
        e.setDestinatario(req.destinatario().trim());
        e.setDireccionDestino(req.direccionDestino().trim());
        e.setDescripcion(req.descripcion());
        e.setEstado(Estado.EN_RECEPCION);
        e.setUbicacionActual(req.ubicacionRecepcion().trim());
        e.setFechaCreacion(LocalDateTime.now());
        e.agregarHistorial(Estado.EN_RECEPCION, e.getUbicacionActual());
        return EncomiendaResponse.from(repo.save(e));
    }

    // CONSULTAR: busca por código de seguimiento
    @Transactional(readOnly = true)
    public EncomiendaResponse obtener(String codigo) {
        return EncomiendaResponse.from(buscar(codigo));
    }

    // LISTAR: todas las encomiendas
    @Transactional(readOnly = true)
    public List<EncomiendaResponse> listar() {
        return repo.findAll().stream().map(EncomiendaResponse::from).toList();
    }

    // ACTUALIZAR: cambia el estado respetando las reglas de negocio
    public EncomiendaResponse actualizarEstado(String codigo, EstadoRequest req) {
        Encomiendas e = buscar(codigo);

        if (e.getEstado() == Estado.ENTREGADO) {
            throw new ReglaNegocioException("La encomienda ya fue entregada y no puede modificarse");
        }
        if (req.estado().ordinal() <= e.getEstado().ordinal()) {
            throw new ReglaNegocioException("El estado solo puede avanzar. Estado actual: " + e.getEstado());
        }

        e.setEstado(req.estado());
        e.setUbicacionActual(req.ubicacion().trim());
        e.agregarHistorial(req.estado(), e.getUbicacionActual());
        return EncomiendaResponse.from(repo.save(e));
    }

    // ELIMINAR
    public void eliminar(String codigo) {
        repo.delete(buscar(codigo));
    }

    // Busca la entidad o lanza 404
    private Encomiendas buscar(String codigo) {
        return repo.findByCodigo(codigo.trim().toUpperCase())
                .orElseThrow(() -> new EncomiendaNoEncontradaException(codigo));
    }

    // Genera un código tipo DINO-7K3M9QXA y verifica que no exista ya
    private String generarCodigoUnico() {
        String codigo;
        do {
            StringBuilder sb = new StringBuilder("DINO-");
            for (int i = 0; i < 8; i++) {
                sb.append(ALFABETO.charAt(RANDOM.nextInt(ALFABETO.length())));
            }
            codigo = sb.toString();
        } while (repo.existsByCodigo(codigo));
        return codigo;
    }
}