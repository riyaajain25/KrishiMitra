// backend/demo/src/main/java/com/example/demo/config/WebClientConfig.java

package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {
    @Value("${ml.python.api.url}")
    private String pythonApiBaseUrl;

    @Bean
    public WebClient mlWebClient(WebClient.Builder webClientBuilder) {
        // This ensures the BASE URL (http://localhost:8000) is used
        return webClientBuilder.baseUrl(pythonApiBaseUrl).build();
    }
}