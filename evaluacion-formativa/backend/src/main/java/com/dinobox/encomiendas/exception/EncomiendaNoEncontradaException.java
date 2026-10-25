package com.dinobox.encomiendas.exception;

public class EncomiendaNoEncontradaException extends RuntimeException {
    public EncomiendaNoEncontradaException(String codigo) {
        super("No existe una encomienda con el código " + codigo);
    }
}