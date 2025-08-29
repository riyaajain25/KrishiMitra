import React from "react";
import "../styles/Dashboard.css";
import farmImg from "../assets/farm.png";
import cropsImg from "../assets/crops.png";
import productsImg from "../assets/products.png";
import balanceImg from "../assets/balance.png";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Greeting */}
      <header className="dashboard-header">
        <h2>Good Morning, Farmer</h2>
      </header>

      {/* Weather Section */}
      <section className="weather-card">
        <h3>Today's Weather</h3>
        <div className="weather-info">
          <p className="location">📍 Ahmedabad, Gujarat</p>
          <h1>30°C</h1>
          <p className="weather-desc">Today is Good Day for Irrigation</p>
        </div>
      </section>

      {/* Farm Management Section */}
      <section className="farm-section">
        <div className="farm-header">
          <h3>Manage Your Farm</h3>
          <a href="/" className="sell-all">Sell all &gt;</a>
        </div>
        <div className="farm-grid">
          <div className="farm-card">
            <img src={farmImg} alt="Farm" />
            <p>My Farm</p>
          </div>
          <div className="farm-card">
            <img src={cropsImg} alt="Crops" />
            <p>Crops</p>
          </div>
          <div className="farm-card">
            <img src={productsImg} alt="Products" />
            <p>Products</p>
          </div>
          <div className="farm-card">
            <img src={balanceImg} alt="Balance" />
            <p>Balance</p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button>👤</button>
        <button className="active">🏠</button>
        <button>⚙️</button>
      </nav>
    </div>
  );
}

export default Dashboard;
