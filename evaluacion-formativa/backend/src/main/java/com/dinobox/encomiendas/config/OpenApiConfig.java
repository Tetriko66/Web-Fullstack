package com.dinobox.encomiendas.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI dinoboxOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("Dinobox API")
                .version("v1")
                .description("API REST para registrar, consultar y actualizar encomiendas"));
    }
}