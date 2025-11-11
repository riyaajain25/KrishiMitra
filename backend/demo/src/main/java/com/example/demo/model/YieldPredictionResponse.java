package com.example.demo.model; 
public class YieldPredictionResponse {

    // Fields must exactly match the JSON keys returned by the Python API
    private double predicted_yield_tonnes_per_hectare;
    private String confidence_status;

    // --- CRITICAL: Constructors for JSON Deserialization ---
    // 1. No-arg constructor (required by Jackson/Spring for object creation)
    public YieldPredictionResponse() {
    }

    // 2. All-arg constructor (optional but good practice)
    public YieldPredictionResponse(double predicted_yield_tonnes_per_hectare, String confidence_status) {
        this.predicted_yield_tonnes_per_hectare = predicted_yield_tonnes_per_hectare;
        this.confidence_status = confidence_status;
    }

    // --- Getters and Setters (Required by Spring/Jackson) ---

    public double getPredicted_yield_tonnes_per_hectare() {
        return predicted_yield_tonnes_per_hectare;
    }

    public void setPredicted_yield_tonnes_per_hectare(double predicted_yield_tonnes_per_hectare) {
        this.predicted_yield_tonnes_per_hectare = predicted_yield_tonnes_per_hectare;
    }

    public String getConfidence_status() {
        return confidence_status;
    }

    public void setConfidence_status(String confidence_status) {
        this.confidence_status = confidence_status;
    }
}