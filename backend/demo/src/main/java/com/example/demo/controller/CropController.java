// backend/src/main/java/com/example/demo/controller/CropController.java

package com.example.demo.controller;

import com.example.demo.request.FarmInputData;
import com.example.demo.model.YieldPredictionResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import org.springframework.beans.factory.annotation.Value;

@RestController
@RequestMapping("/api/crop")
public class CropController {
    private String pythonApiBaseUrl;

   private final WebClient webClient;
public CropController(WebClient mlWebClient) { 
    this.webClient = mlWebClient;
}
    /**
     * Endpoint to receive frontend request and forward it to the Python ML API.
     * Maps to /api/crop/predictYield
     */
    @PostMapping("/predictYield")
    public Mono<YieldPredictionResponse> predictYield(@RequestBody FarmInputData data) {
        System.out.println("Received request for yield prediction: " + data.getCrop());
        
        // Use WebClient to make a POST request to the Python service
        return webClient.post()
                .uri("/predict/yield") // This resolves to http://localhost:8000/predict/yield
                .body(Mono.just(data), FarmInputData.class)
                .retrieve()
                .bodyToMono(YieldPredictionResponse.class)
                .doOnError(e -> System.err.println("Error calling Python API: " + e.getMessage()));
    }
    
    // Add other necessary controllers (Auth, etc.) here...
}