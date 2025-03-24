import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <NavigationBar />
        <div className="dashboard-main">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashboard-widgets">
            {/* Dashboard widgets will go here */}
            <div className="dashboard-widget">
              <h2>Weather Alerts</h2>
              <p>No active alerts at this time</p>
            </div>
            <div className="dashboard-widget">
              <h2>Nearby Shelters</h2>
              <p>3 shelters available within 10 miles</p>
            </div>
            <div className="dashboard-widget">
              <h2>Volunteer Opportunities</h2>
              <p>5 requests for assistance in your area</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}; 