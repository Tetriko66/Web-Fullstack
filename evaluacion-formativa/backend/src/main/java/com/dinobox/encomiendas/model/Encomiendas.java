package com.dinobox.encomiendas.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "encomienda")
@Getter @Setter @NoArgsConstructor
public class Encomiendas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 20)
    private String codigo;

    @Column(nullable = false, length = 100)
    private String remitente;

    @Column(nullable = false, length = 100)
    private String destinatario;

    @Column(nullable = false, length = 200)
    private String direccionDestino;

    @Column(length = 255)
    private String descripcion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Estado estado;

    @Column(nullable = false, length = 100)
    private String ubicacionActual;

    @Column(nullable = false)
    private LocalDateTime fechaCreacion;

    @OneToMany(mappedBy = "encomienda", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("fecha ASC")
    private List<HistorialEstado> historial = new ArrayList<>();

    public void agregarHistorial(Estado estado, String ubicacion) {
        HistorialEstado h = new HistorialEstado();
        h.setEncomienda(this);
        h.setEstado(estado);
        h.setUbicacion(ubicacion);
        h.setFecha(LocalDateTime.now());
        historial.add(h);
    }
}
