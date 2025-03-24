import { Link } from "react-router-dom";
import "./hero-content.css";

export function HeroContent() {
  return (
    <div className="hero-content">
      <div className="hero-text-container">
        <h1 className="hero-title">
          Alerts. Shelter. Support.
        </h1>
        <h2 className="hero-subtitle">
          Here For The People Of Puerto Rico.
        </h2>
        <p className="hero-description">
          StormShield provides real-time hurricane alerts, shelter locations, and community support during emergencies.
        </p>
        <div className="hero-buttons">
          <Link to="/dashboard" className="hero-button primary">
            View Dashboard
          </Link>
          <Link to="/shelter-locator" className="hero-button secondary">
            Find Shelter
          </Link>
        </div>
      </div>
    </div>
  );
} 