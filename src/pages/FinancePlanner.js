import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css"; // ✅ Reuse same CSS for consistent navbar styling
import "../styles/FinancePlanner.css";
import logo from "../assets/logo.jpg";

function FinancePlanner() {
  // --- Budget Templates ---
  const budgetTemplates = {
    wheat: [
      { item: "Seeds", cost: 4500 },
      { item: "Fertilizers", cost: 6000 },
      { item: "Pesticides", cost: 2500 },
      { item: "Irrigation", cost: 3000 },
      { item: "Labor", cost: 8000 },
      { item: "Harvesting", cost: 4000 },
    ],
    cotton: [
      { item: "Seeds", cost: 8000 },
      { item: "Fertilizers", cost: 7000 },
      { item: "Pesticides", cost: 5000 },
      { item: "Irrigation", cost: 4000 },
      { item: "Labor", cost: 12000 },
      { item: "Harvesting", cost: 5000 },
    ],
    sugarcane: [
      { item: "Seeds", cost: 10000 },
      { item: "Fertilizers", cost: 9000 },
      { item: "Pesticides", cost: 4000 },
      { item: "Irrigation", cost: 7000 },
      { item: "Labor", cost: 15000 },
      { item: "Harvesting", cost: 6000 },
    ],
    rice: [
      { item: "Seeds", cost: 3000 },
      { item: "Fertilizers", cost: 5000 },
      { item: "Pesticides", cost: 2500 },
      { item: "Irrigation", cost: 3500 },
      { item: "Labor", cost: 7000 },
      { item: "Harvesting", cost: 4000 },
    ],
    potato: [
      { item: "Seeds", cost: 10000 },
      { item: "Fertilizers", cost: 8000 },
      { item: "Pesticides", cost: 3500 },
      { item: "Irrigation", cost: 4000 },
      { item: "Labor", cost: 9000 },
      { item: "Harvesting", cost: 4500 },
    ],
    tomato: [
      { item: "Seeds", cost: 4000 },
      { item: "Fertilizers", cost: 4500 },
      { item: "Pesticides", cost: 2500 },
      { item: "Irrigation", cost: 3000 },
      { item: "Labor", cost: 7000 },
      { item: "Harvesting", cost: 3500 },
    ],
  };

  // --- KCC Calculator State ---
  const [landSize, setLandSize] = useState(1);
  const [kccAmount, setKccAmount] = useState(null);

  // --- Insurance Calculator State ---
  const [loanAmount, setLoanAmount] = useState(50000);
  const [cropType, setCropType] = useState("kharif");
  const [premium, setPremium] = useState(null);

  // --- Budget Planner State ---
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [budgetItems, setBudgetItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // --- Handlers ---
  const handleKccCalculate = () => {
    const DUMMY_SCALE_OF_FINANCE_PER_ACRE = 50000;
    const calculatedAmount = landSize * DUMMY_SCALE_OF_FINANCE_PER_ACRE;
    setKccAmount(calculatedAmount);
  };

  const handleBimaCalculate = () => {
    let rate = 0.02;
    if (cropType === "rabi") rate = 0.015;
    else if (cropType === "commercial") rate = 0.05;
    const calculatedPremium = loanAmount * rate;
    setPremium(calculatedPremium);
  };

  const handleLoadBudget = () => {
    const items = budgetTemplates[selectedCrop] || [];
    setBudgetItems(items);
    const total = items.reduce((acc, curr) => acc + curr.cost, 0);
    setTotalCost(total);
  };

  return (
    <div>
      {/* ✅ Navbar from Dashboard.js */}
      <div className="navbar-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="brand-name">KRISHIMITRA</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/crop-prediction">Crop Prediction</Link></li>
            <li><Link to="/financial-status">Finance Planner</Link></li>
            <li><Link to="/schemes">Schemes</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>

      {/* ✅ Finance Tools Section */}
      <div className="finance-container">
        {/* --- 1. KCC CALCULATOR --- */}
        <div className="tool-card">
          <h2>Kisan Credit Card (KCC) Calculator</h2>
          <p className="tool-desc">
            Estimate your eligible KCC loan amount based on your land size.
          </p>
          <div className="form-group">
            <label>Land Size (in acres)</label>
            <input
              type="number"
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
              placeholder="e.g., 5"
            />
          </div>
          <button onClick={handleKccCalculate}>Calculate</button>
          {kccAmount !== null && (
            <div className="result">
              <h4>Estimated Loan Amount:</h4>
              <strong>₹ {kccAmount.toLocaleString("en-IN")}</strong>
              <small>
                *This estimate is based on an average rate of ₹50,000 per acre.
              </small>
            </div>
          )}
        </div>

        {/* --- 2. CROP INSURANCE CALCULATOR --- */}
        <div className="tool-card">
          <h2>Crop Insurance (PMFBY) Premium Calculator</h2>
          <p className="tool-desc">
            Calculate your payable premium under the Pradhan Mantri Fasal Bima Yojana.
          </p>

          <div className="form-group">
            <label>Loan Amount / Sum Insured (₹)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g., 100000"
            />
          </div>

          <div className="form-group">
            <label>Crop Season</label>
            <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
              <option value="kharif">Kharif (e.g., Rice, Cotton) - 2%</option>
              <option value="rabi">Rabi (e.g., Wheat, Mustard) - 1.5%</option>
              <option value="commercial">
                Commercial (e.g., Sugarcane, Fruits) - 5%
              </option>
            </select>
          </div>

          <button onClick={handleBimaCalculate}>Calculate Premium</button>
          {premium !== null && (
            <div className="result">
              <h4>Your Payable Premium:</h4>
              <strong>₹ {premium.toLocaleString("en-IN")}</strong>
              <small>Based on official PMFBY premium rates.</small>
            </div>
          )}
        </div>

        {/* --- 3. CROP BUDGET PLANNER --- */}
        <div className="tool-card">
          <h2>Crop Budget Planner</h2>
          <p className="tool-desc">Estimate your total expenses for one acre of crop.</p>

          <div className="form-group">
            <label>Select Crop</label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
            >
              {Object.keys(budgetTemplates).map((crop) => (
                <option key={crop} value={crop}>
                  {crop.charAt(0).toUpperCase() + crop.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleLoadBudget}>Load Budget Template</button>
          {budgetItems.length > 0 && (
            <div className="result budget-result">
              <h4>
                Budget for {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)} (per acre):
              </h4>
              <ul className="budget-list">
                {budgetItems.map((item, index) => (
                  <li key={index}>
                    <span>{item.item}</span>
                    <strong>₹ {item.cost.toLocaleString("en-IN")}</strong>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="budget-total">
                <span>Total Estimated Cost:</span>
                <strong>₹ {totalCost.toLocaleString("en-IN")}</strong>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FinancePlanner;
