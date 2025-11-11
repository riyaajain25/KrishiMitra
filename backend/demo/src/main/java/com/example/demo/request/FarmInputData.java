// backend/demo/src/main/java/com/example/demo/request/FarmInputData.java

package com.example.demo.request; 
import com.fasterxml.jackson.annotation.JsonProperty;

public class FarmInputData {
    
    // Use @JsonProperty to force the exact casing Python Pydantic expects
    @JsonProperty("Area_hectares")
    private double Area_hectares;
    
    @JsonProperty("Rainfall_mm")
    private double Rainfall_mm;
    
    @JsonProperty("Temperature_celsius")
    private double Temperature_celsius;
    
    @JsonProperty("Fertilizer_kg_per_hectare")
    private double Fertilizer_kg_per_hectare;
    
    @JsonProperty("Year")
    private int Year;
    
    @JsonProperty("State")
    private String State;
    
    @JsonProperty("Crop")
    private String Crop;
    
    @JsonProperty("Production_tonnes")
    private double Production_tonnes;

    // --- Getters and Setters (Updated to reflect new field names) ---
    // NOTE: Java getters/setters follow standard camelCase convention
    
    public double getArea_hectares() { return Area_hectares; }
    public void setArea_hectares(double Area_hectares) { this.Area_hectares = Area_hectares; }
    
    public double getRainfall_mm() { return Rainfall_mm; }
    public void setRainfall_mm(double Rainfall_mm) { this.Rainfall_mm = Rainfall_mm; }
    
    public double getTemperature_celsius() { return Temperature_celsius; }
    public void setTemperature_celsius(double Temperature_celsius) { this.Temperature_celsius = Temperature_celsius; }
    
    public double getFertilizer_kg_per_hectare() { return Fertilizer_kg_per_hectare; }
    public void setFertilizer_kg_per_hectare(double Fertilizer_kg_per_hectare) { this.Fertilizer_kg_per_hectare = Fertilizer_kg_per_hectare; }

    public int getYear() { return Year; }
    public void setYear(int Year) { this.Year = Year; }

    public String getState() { return State; }
    public void setState(String State) { this.State = State; }

    public String getCrop() { return Crop; }
    public void setCrop(String Crop) { this.Crop = Crop; }

    public double getProduction_tonnes() { return Production_tonnes; }
    public void setProduction_tonnes(double Production_tonnes) { this.Production_tonnes = Production_tonnes; }
}