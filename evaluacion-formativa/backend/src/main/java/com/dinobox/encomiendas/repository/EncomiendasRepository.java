package com.dinobox.encomiendas.repository;

import com.dinobox.encomiendas.model.Encomiendas;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface EncomiendasRepository extends JpaRepository<Encomiendas, Long> {
    Optional<Encomiendas> findByCodigo(String codigo);
    boolean existsByCodigo(String codigo);
}