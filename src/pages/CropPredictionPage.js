// public/src/pages/CropPredictionPage.js

import React, { useState } from "react";
// Assuming you have a basic styling file for forms
// import "../styles/CropPredictionPage.css"; 

// The Java backend endpoint is configured to be accessible via /api/crop
const API_PREDICT_YIELD = '/api/crop/predictYield'; 

// Initial state for the farm inputs
const initialFormData = {
    area_hectares: 1000,
    rainfall_mm: 750,
    temperature_celsius: 28.0,
    fertilizer_kg_per_hectare: 250,
    year: new Date().getFullYear(),
    state: 'Punjab',
    crop: 'Wheat',
    production_tonnes: 0.0, // Used for feature engineering, typically 0 for a forecast
};

function CropPredictionPage() {
    const [formData, setFormData] = useState(initialFormData);
    const [predictionResult, setPredictionResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handles changes for all input fields
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            // Convert numbers back from strings where needed
            [name]: type === 'number' ? Number(value) : value,
        });
    };

    // Handles the form submission and API call
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setPredictionResult(null);

        try {
            // Step 1: Call Java Backend (which proxies to Python API)
            const response = await fetch(API_PREDICT_YIELD, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Read and display error details from the backend if available
                const errorBody = await response.text();
                throw new Error(`Server Error (${response.status}): ${errorBody}`);
            }

            // Step 2: Receive and map the prediction result
            const result = await response.json(); 
            setPredictionResult(result);

        } catch (err) {
            console.error("Prediction Fetch Error:", err);
            setError(`Prediction failed: ${err.message}. Check your Java and Python console logs.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="prediction-container">
            <h1>🌾 Enhanced Crop Yield Prediction</h1>
            <p>Input your farm and weather parameters to receive a forecast.</p>

            {/* --- Prediction Form --- */}
            <form onSubmit={handleSubmit} className="prediction-form">
                
                {/* Row 1: Area and Rainfall */}
                <div className="form-group">
                    <label htmlFor="area_hectares">Area (Hectares):</label>
                    <input type="number" name="area_hectares" value={formData.area_hectares} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="rainfall_mm">Rainfall (mm):</label>
                    <input type="number" name="rainfall_mm" value={formData.rainfall_mm} onChange={handleChange} required />
                </div>

                {/* Row 2: Temperature and Fertilizer */}
                <div className="form-group">
                    <label htmlFor="temperature_celsius">Temperature (°C):</label>
                    <input type="number" step="0.1" name="temperature_celsius" value={formData.temperature_celsius} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="fertilizer_kg_per_hectare">Fertilizer (kg/Ha):</label>
                    <input type="number" name="fertilizer_kg_per_hectare" value={formData.fertilizer_kg_per_hectare} onChange={handleChange} required />
                </div>

                {/* Row 3: Year and Crop/State (Use simple text inputs for quick setup) */}
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input type="number" name="year" value={formData.year} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="crop">Crop:</label>
                    <input type="text" name="crop" value={formData.crop} onChange={handleChange} required />
                </div>
                
                {/* Hidden/Default field required by Python feature engineering */}
                <input type="hidden" name="production_tonnes" value={formData.production_tonnes} />

                <button type="submit" disabled={isLoading} className="predict-button">
                    {isLoading ? '⏳ Analyzing Data...' : '📈 Get Yield Forecast'}
                </button>
            </form>

            {/* --- Prediction Output Area --- */}
            <div className="results-box">
                {error && <p className="error-message">❌ Error: {error}</p>}
                
                {predictionResult && (
                    <div className="success-message">
                        <h3>✅ Forecast Complete</h3>
                        <p>
                            **Predicted Yield:** <span className="yield-value">
                                {predictionResult.predicted_yield_tonnes_per_hectare.toFixed(4)} tonnes/hectare
                            </span>
                        </p>
                        <p>
                            **Confidence:** <span className="confidence-status">{predictionResult.confidence_status}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CropPredictionPage;