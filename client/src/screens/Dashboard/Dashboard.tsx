import { useEffect, useState } from "react";
import liveUpdatesImage from "../../assets/LIVE UPDATES.svg";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import RedDotIndicator from "../../components/RedDotIndicator";
import "./dashboard.css";

// Alert type icons
const AlertIcon = () => (
  <svg width="40" height="40" viewBox="0 0 135 129" fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
    <path d="M15.3281 112.875C14.2969 112.875 13.3594 112.63 12.5156 112.139C11.6719 111.648 11.0156 110.997 10.5469 110.187C10.0781 109.378 9.82125 108.503 9.77625 107.564C9.73125 106.626 9.98812 105.708 10.5469 104.812L62.5781 18.8125C63.1406 17.9167 63.8681 17.2448 64.7606 16.7969C65.6531 16.349 66.5662 16.125 67.5 16.125C68.4338 16.125 69.3488 16.349 70.245 16.7969C71.1413 17.2448 71.8669 17.9167 72.4219 18.8125L124.453 104.812C125.016 105.708 125.274 106.627 125.229 107.57C125.184 108.512 124.926 109.385 124.453 110.187C123.981 110.99 123.324 111.641 122.484 112.139C121.644 112.637 120.707 112.882 119.672 112.875H15.3281ZM67.5 96.75C69.0938 96.75 70.4306 96.234 71.5106 95.202C72.5906 94.17 73.1287 92.8943 73.125 91.375C73.1213 89.8557 72.5812 88.58 71.505 87.548C70.4287 86.516 69.0938 86 67.5 86C65.9062 86 64.5713 86.516 63.495 87.548C62.4188 88.58 61.8787 89.8557 61.875 91.375C61.8713 92.8943 62.4113 94.1718 63.495 95.2074C64.5788 96.243 65.9137 96.7572 67.5 96.75ZM67.5 80.625C69.0938 80.625 70.4306 80.109 71.5106 79.077C72.5906 78.045 73.1287 76.7693 73.125 75.25V59.125C73.125 57.6021 72.585 56.3264 71.505 55.298C70.425 54.2696 69.09 53.7536 67.5 53.75C65.91 53.7464 64.575 54.2624 63.495 55.298C62.415 56.3336 61.875 57.6092 61.875 59.125V75.25C61.875 76.7729 62.415 78.0504 63.495 79.0824C64.575 80.1144 65.91 80.6286 67.5 80.625Z" fill="#C9283E" fillOpacity="0.89" />
  </svg>
);

const FloodIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flood-icon">
    <path d="M20 3.33334C19.0833 3.33334 18.3333 4.08334 18.3333 5.00001V8.33334C18.3333 9.25001 19.0833 10 20 10C20.9167 10 21.6667 9.25001 21.6667 8.33334V5.00001C21.6667 4.08334 20.9167 3.33334 20 3.33334ZM10 6.66668C9.08334 6.66668 8.33334 7.41668 8.33334 8.33334C8.33334 9.25001 9.08334 10 10 10C10.9167 10 11.6667 9.25001 11.6667 8.33334C11.6667 7.41668 10.9167 6.66668 10 6.66668ZM30 6.66668C29.0833 6.66668 28.3333 7.41668 28.3333 8.33334C28.3333 9.25001 29.0833 10 30 10C30.9167 10 31.6667 9.25001 31.6667 8.33334C31.6667 7.41668 30.9167 6.66668 30 6.66668ZM5.00001 13.3333C4.08334 13.3333 3.33334 14.0833 3.33334 15C3.33334 15.9167 4.08334 16.6667 5.00001 16.6667C5.91668 16.6667 6.66668 15.9167 6.66668 15C6.66668 14.0833 5.91668 13.3333 5.00001 13.3333ZM35 13.3333C34.0833 13.3333 33.3333 14.0833 33.3333 15C33.3333 15.9167 34.0833 16.6667 35 16.6667C35.9167 16.6667 36.6667 15.9167 36.6667 15C36.6667 14.0833 35.9167 13.3333 35 13.3333ZM20 13.3333C16.3167 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3167 26.6667 20 26.6667C23.6833 26.6667 26.6667 23.6833 26.6667 20C26.6667 16.3167 23.6833 13.3333 20 13.3333ZM20 16.6667C21.85 16.6667 23.3333 18.15 23.3333 20C23.3333 21.85 21.85 23.3333 20 23.3333C18.15 23.3333 16.6667 21.85 16.6667 20C16.6667 18.15 18.15 16.6667 20 16.6667ZM8.33334 20C7.41668 20 6.66668 20.75 6.66668 21.6667C6.66668 22.5833 7.41668 23.3333 8.33334 23.3333C9.25001 23.3333 10 22.5833 10 21.6667C10 20.75 9.25001 20 8.33334 20ZM31.6667 20C30.75 20 30 20.75 30 21.6667C30 22.5833 30.75 23.3333 31.6667 23.3333C32.5833 23.3333 33.3333 22.5833 33.3333 21.6667C33.3333 20.75 32.5833 20 31.6667 20ZM5.00001 26.6667C4.08334 26.6667 3.33334 27.4167 3.33334 28.3333C3.33334 29.25 4.08334 30 5.00001 30C5.91668 30 6.66668 29.25 6.66668 28.3333C6.66668 27.4167 5.91668 26.6667 5.00001 26.6667ZM35 26.6667C34.0833 26.6667 33.3333 27.4167 33.3333 28.3333C33.3333 29.25 34.0833 30 35 30C35.9167 30 36.6667 29.25 36.6667 28.3333C36.6667 27.4167 35.9167 26.6667 35 26.6667ZM10 33.3333C9.08334 33.3333 8.33334 34.0833 8.33334 35C8.33334 35.9167 9.08334 36.6667 10 36.6667C10.9167 36.6667 11.6667 35.9167 11.6667 35C11.6667 34.0833 10.9167 33.3333 10 33.3333ZM30 33.3333C29.0833 33.3333 28.3333 34.0833 28.3333 35C28.3333 35.9167 29.0833 36.6667 30 36.6667C30.9167 36.6667 31.6667 35.9167 31.6667 35C31.6667 34.0833 30.9167 33.3333 30 33.3333ZM20 30C19.0833 30 18.3333 30.75 18.3333 31.6667V35C18.3333 35.9167 19.0833 36.6667 20 36.6667C20.9167 36.6667 21.6667 35.9167 21.6667 35V31.6667C21.6667 30.75 20.9167 30 20 30Z" fill="#C9283E" />
  </svg>
);

const ServiceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
    <path d="M18.3333 3.33334V8.33334H21.6667V3.33334H18.3333ZM8.33334 6.66668L5.83334 9.16668L9.16668 12.5L11.6667 10L8.33334 6.66668ZM31.6667 6.66668L28.3333 10L30.8333 12.5L34.1667 9.16668L31.6667 6.66668ZM20 10C14.4833 10 10 14.4833 10 20C10 25.5167 14.4833 30 20 30C25.5167 30 30 25.5167 30 20C30 14.4833 25.5167 10 20 10ZM20 13.3333C23.6833 13.3333 26.6667 16.3167 26.6667 20C26.6667 23.6833 23.6833 26.6667 20 26.6667C16.3167 26.6667 13.3333 23.6833 13.3333 20C13.3333 16.3167 16.3167 13.3333 20 13.3333ZM3.33334 18.3333V21.6667H8.33334V18.3333H3.33334ZM31.6667 18.3333V21.6667H36.6667V18.3333H31.6667ZM9.16668 27.5L5.83334 30.8333L8.33334 33.3333L11.6667 30L9.16668 27.5ZM30.8333 27.5L28.3333 30L31.6667 33.3333L34.1667 30.8333L30.8333 27.5ZM18.3333 31.6667V36.6667H21.6667V31.6667H18.3333Z" fill="#C9283E" />
  </svg>
);

const RoadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="road-icon">
    <path d="M18.3333 3.33334V10H21.6667V3.33334H18.3333ZM18.3333 16.6667V23.3333H21.6667V16.6667H18.3333ZM18.3333 30V36.6667H21.6667V30H18.3333ZM3.33334 6.66668V33.3333L13.3333 20L3.33334 6.66668ZM36.6667 6.66668L26.6667 20L36.6667 33.3333V6.66668Z" fill="#C9283E" />
  </svg>
);

const ShelterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shelter-icon">
    <path d="M20 3.33334L3.33334 15V18.3333H6.66668V35H15V25H25V35H33.3333V18.3333H36.6667V15L20 3.33334ZM20 8.33334L30 15V31.6667H28.3333V21.6667H11.6667V31.6667H10V15L20 8.33334Z" fill="#C9283E" />
  </svg>
);

const MedicalIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="medical-icon">
    <path d="M18.3333 3.33334V16.6667H5.00001V23.3333H18.3333V36.6667H25V23.3333H38.3333V16.6667H25V3.33334H18.3333Z" fill="#C9283E" />
  </svg>
);

// Mock weather data - in a real app, this would come from an API
const initialWeatherUpdates = [
  {
    id: 1,
    title: "Weather Alert",
    description: "Tropical storm warning in effect for eastern Puerto Rico. Expect heavy rainfall and winds up to 45mph.",
    timestamp: "Updated 10 minutes ago",
    type: "weather"
  },
  {
    id: 2,
    title: "Flood Warning",
    description: "Flash flood warning for San Juan metropolitan area. Several roads reported flooded near Río Piedras.",
    timestamp: "Updated 25 minutes ago",
    type: "flood"
  },
  {
    id: 3,
    title: "Emergency Services Update",
    description: "Emergency services are responding to power outages in Ponce. Estimated restoration time: 6 hours.",
    timestamp: "Updated 42 minutes ago",
    type: "service"
  },
];

// Additional updates that can be loaded
const additionalUpdates = [
  {
    id: 4,
    title: "Road Closure Alert",
    description: "PR-3 highway closed between Fajardo and Luquillo due to fallen trees. Use alternate routes.",
    timestamp: "Updated 1 hour ago",
    type: "road"
  },
  {
    id: 5,
    title: "Shelter Status",
    description: "New emergency shelter opened at Bayamón Central High School. Currently at 30% capacity.",
    timestamp: "Updated 1.5 hours ago",
    type: "shelter"
  },
  {
    id: 6,
    title: "Medical Services",
    description: "Mobile medical unit deployed to Humacao. Offering emergency services and basic medical care.",
    timestamp: "Updated 2 hours ago",
    type: "medical"
  },
];

export const Dashboard = () => {
  const [updates, setUpdates] = useState(initialWeatherUpdates);
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const updateInterval = setInterval(() => {
      // In a real app, you would fetch new data from an API here
      const updatedData = updates.map(update => ({
        ...update,
        timestamp: `Updated ${Math.floor(Math.random() * 10) + 1} minutes ago`
      }));
      setUpdates(updatedData);
    }, 60000); // Update every minute

    return () => clearInterval(updateInterval);
  }, [updates]);

  // Function to load more updates
  const loadMoreUpdates = () => {
    if (showAllUpdates) {
      setUpdates(initialWeatherUpdates);
    } else {
      setUpdates([...initialWeatherUpdates, ...additionalUpdates]);
    }
    setShowAllUpdates(!showAllUpdates);
  };

  // Function to render the appropriate icon based on alert type
  const renderAlertIcon = (type: string) => {
    switch (type) {
      case 'weather':
        return <AlertIcon />;
      case 'flood':
        return <FloodIcon />;
      case 'service':
        return <ServiceIcon />;
      case 'road':
        return <RoadIcon />;
      case 'shelter':
        return <ShelterIcon />;
      case 'medical':
        return <MedicalIcon />;
      default:
        return <AlertIcon />;
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <NavigationBar />
        <div className="dashboard-main">
          <div className="dashboard-title-container">
            <img src={liveUpdatesImage} alt="LIVE UPDATES" className="dashboard-title-image" />
            <div className="red-dot-wrapper">
              <RedDotIndicator />
            </div>
          </div>

          <div className="update-rectangles">
            {updates.map(update => (
              <div key={update.id} className="update-rectangle">
                <div className="update-icon">
                  {renderAlertIcon(update.type)}
                </div>
                <div className="update-content">
                  <h3 className="update-title">{update.title}</h3>
                  <p className="update-description">{update.description}</p>
                  <span className="update-timestamp">{update.timestamp}</span>
                </div>
                <div className="update-severity-indicator"></div>
              </div>
            ))}
          </div>
          
          <div className="more-updates">
            <button className="more-updates-button" onClick={loadMoreUpdates}>
              {showAllUpdates ? "Show Less Updates" : "Show More Updates"}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard; 