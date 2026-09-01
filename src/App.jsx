import { useState } from "react";
import "./App.css";
import RiskMap from "./components/RiskMap";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    if (activePage === "map") {
      return (
        <section className="page-section">
          <h2>🗺️ Interactive Landslide Risk Map</h2>
          <p>
            Explore landslide risk zones, historical events and monitoring
            locations.
          </p>
          <RiskMap />
        </section>
      );
    }

    if (activePage === "prediction") {
      return <Prediction />;
    }

    if (activePage === "history") {
      return <Historical />;
    }

    if (activePage === "terrain") {
      return <Terrain />;
    }

    return <Dashboard />;
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          🏔️ <span>Landslide AI</span>
        </div>

        <nav>
          <button onClick={() => setActivePage("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setActivePage("map")}>
            Risk Map
          </button>

          <button onClick={() => setActivePage("prediction")}>
            AI Prediction
          </button>

          <button onClick={() => setActivePage("history")}>
            History
          </button>

          <button onClick={() => setActivePage("terrain")}>
            Terrain
          </button>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer>
        <p>
          AI-Based Landslide Risk Monitoring & Early Warning System
        </p>
        <p>North Eastern Region of India</p>
      </footer>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="hero">
        <div>
          <h1>AI-Based Landslide Risk Monitoring</h1>

          <p>
            Real-time landslide risk prediction and early warning system
            for the North Eastern Region of India.
          </p>

          <button className="primary-button">
            🗺️ Explore Risk Map
          </button>
        </div>

        <div className="hero-icon">
          🏔️
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card rainfall">
          <div className="stat-icon">🌧️</div>
          <h3>Rainfall</h3>
          <strong>156 mm</strong>
          <p>Last 24 hours</p>
        </div>

        <div className="stat-card risk">
          <div className="stat-icon">⚠️</div>
          <h3>Current Risk</h3>
          <strong>HIGH</strong>
          <p>Risk probability: 76%</p>
        </div>

        <div className="stat-card alert">
          <div className="stat-icon">🚨</div>
          <h3>Active Alerts</h3>
          <strong>08</strong>
          <p>Requires monitoring</p>
        </div>

        <div className="stat-card locations">
          <div className="stat-icon">📍</div>
          <h3>Monitored Areas</h3>
          <strong>1,250</strong>
          <p>Across the study region</p>
        </div>

      </div>

      <div className="content-grid">

        <div className="panel map-preview">
          <h2>🗺️ Landslide Risk Map</h2>
          <RiskMap />
        </div>

        <div className="panel">
          <h2>🚨 Early Warning Alerts</h2>

          <Alert
            level="VERY HIGH"
            location="East Sikkim"
            rainfall="182 mm"
          />

          <Alert
            level="HIGH"
            location="Tawang, Arunachal Pradesh"
            rainfall="156 mm"
          />

          <Alert
            level="MODERATE"
            location="East Khasi Hills, Meghalaya"
            rainfall="112 mm"
          />
        </div>

      </div>

      <div className="content-grid">

        <div className="panel">
          <h2>📊 Risk Statistics</h2>

          <div className="risk-bars">
            <RiskBar name="Very Low" value={20} />
            <RiskBar name="Low" value={35} />
            <RiskBar name="Moderate" value={55} />
            <RiskBar name="High" value={75} />
            <RiskBar name="Very High" value={88} />
          </div>
        </div>

        <div className="panel">
          <h2>🤖 AI Model</h2>

          <div className="ai-result">
            <div>
              <span>Model</span>
              <strong>Random Forest</strong>
            </div>

            <div>
              <span>Prediction</span>
              <strong>HIGH RISK</strong>
            </div>

            <div>
              <span>Probability</span>
              <strong>76%</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Prediction() {
  return (
    <section className="page-section">
      <h2>🤖 Location-Based AI Prediction</h2>

      <div className="prediction-form">

        <label>Latitude</label>
        <input placeholder="Example: 27.3314" />

        <label>Longitude</label>
        <input placeholder="Example: 88.6139" />

        <label>Rainfall (mm)</label>
        <input placeholder="Example: 150" />

        <label>Slope (degrees)</label>
        <input placeholder="Example: 35" />

        <button className="primary-button">
          🤖 Predict Landslide Risk
        </button>

      </div>

      <div className="prediction-result">
        <h3>Prediction Result</h3>

        <div className="probability">
          76%
        </div>

        <h2>🟠 HIGH RISK</h2>

        <p>
          This is a prototype result. The real AI model will be connected
          in the next development stage.
        </p>
      </div>
    </section>
  );
}

function Historical() {
  return (
    <section className="page-section">
      <h2>📈 Historical Landslide Analysis</h2>

      <div className="history-grid">

        <div className="history-card">
          <h3>2021</h3>
          <strong>126</strong>
          <p>Landslide events</p>
        </div>

        <div className="history-card">
          <h3>2022</h3>
          <strong>158</strong>
          <p>Landslide events</p>
        </div>

        <div className="history-card">
          <h3>2023</h3>
          <strong>201</strong>
          <p>Landslide events</p>
        </div>

        <div className="history-card">
          <h3>2024</h3>
          <strong>187</strong>
          <p>Landslide events</p>
        </div>

      </div>
    </section>
  );
}

function Terrain() {
  return (
    <section className="page-section">
      <h2>🛰️ Satellite & Terrain Information</h2>

      <div className="terrain-grid">

        <div className="terrain-card">
          <h3>⛰️ Elevation</h3>
          <p>Digital Elevation Model</p>
        </div>

        <div className="terrain-card">
          <h3>📐 Slope</h3>
          <p>Slope angle information</p>
        </div>

        <div className="terrain-card">
          <h3>🌲 Land Cover</h3>
          <p>Forest, agriculture and built-up areas</p>
        </div>

        <div className="terrain-card">
          <h3>💧 Drainage</h3>
          <p>River and drainage network</p>
        </div>

        <div className="terrain-card">
          <h3>🛰️ Satellite</h3>
          <p>Satellite imagery layer</p>
        </div>

        <div className="terrain-card">
          <h3>🪨 Geology</h3>
          <p>Geological information</p>
        </div>

      </div>
    </section>
  );
}

function Alert({ level, location, rainfall }) {
  return (
    <div className="alert-item">
      <div>
        <strong>{level}</strong>
        <p>{location}</p>
      </div>

      <span>🌧️ {rainfall}</span>
    </div>
  );
}

function RiskBar({ name, value }) {
  return (
    <div className="risk-bar">
      <div className="risk-label">
        <span>{name}</span>
        <span>{value}%</span>
      </div>

      <div className="bar">
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export default App;