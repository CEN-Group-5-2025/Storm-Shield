import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./shelter-locator.css";

// Define shelter data type
interface Shelter {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  occupancy: number;
  coordinates: [number, number]; // [latitude, longitude]
  amenities: string[];
  lastUpdated: string;
}

// Create a custom icon using divIcon for better control
const shelterIcon = L.divIcon({
  className: "custom-shelter-marker",
  html: `<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17.5" cy="17.5" r="17.5" fill="#71C2CB" fill-opacity="0.8"/>
    <path d="M17.5 5L7 13V15.5H9.5V27H15.5V20H19.5V27H25.5V15.5H28V13L17.5 5ZM17.5 8.5L24.5 13V24.5H22V17.5H13V24.5H12V13L17.5 8.5Z" fill="#011F27"/>
  </svg>`,
  iconSize: [35, 35],
  iconAnchor: [17, 17],
  popupAnchor: [0, -17]
});

export const ShelterLocatorPage = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedShelter, setSelectedShelter] = useState<Shelter | null>(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  // Puerto Rico center coordinates
  const mapCenter: [number, number] = [18.2208, -66.5901];

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true);
    }, 300);

    // Fetch shelter data - in a real app, this would be an API call
    // For now, we'll use mock data
    const fetchShelters = async () => {
      setLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        setShelters(mockShelters);
        setLoading(false);
      }, 1000);
    };

    fetchShelters();
  }, []);

  // Mock shelter data
  const mockShelters: Shelter[] = [
    {
      id: 1,
      name: "San Juan Community Center",
      address: "123 Calle Principal",
      city: "San Juan",
      capacity: 200,
      occupancy: 75,
      coordinates: [18.4655, -66.1057],
      amenities: ["Food", "Water", "Medical", "Power"],
      lastUpdated: "10 minutes ago"
    },
    {
      id: 2,
      name: "Ponce Emergency Shelter",
      address: "456 Avenida Sur",
      city: "Ponce",
      capacity: 150,
      occupancy: 120,
      coordinates: [18.0111, -66.6141],
      amenities: ["Food", "Water", "Power"],
      lastUpdated: "25 minutes ago"
    },
    {
      id: 3,
      name: "Mayagüez High School",
      address: "789 Calle Oeste",
      city: "Mayagüez",
      capacity: 300,
      occupancy: 98,
      coordinates: [18.2011, -67.1397],
      amenities: ["Food", "Water", "Medical", "Power", "Showers"],
      lastUpdated: "1 hour ago"
    },
    {
      id: 4,
      name: "Arecibo Convention Center",
      address: "321 Avenida Norte",
      city: "Arecibo",
      capacity: 250,
      occupancy: 180,
      coordinates: [18.4725, -66.7156],
      amenities: ["Food", "Water", "Medical"],
      lastUpdated: "45 minutes ago"
    },
    {
      id: 5,
      name: "Fajardo Community Shelter",
      address: "654 Calle Este",
      city: "Fajardo",
      capacity: 120,
      occupancy: 45,
      coordinates: [18.3366, -65.6528],
      amenities: ["Food", "Water", "Power"],
      lastUpdated: "2 hours ago"
    }
  ];

  // Calculate occupancy percentage
  const getOccupancyPercentage = (shelter: Shelter) => {
    return Math.round((shelter.occupancy / shelter.capacity) * 100);
  };

  // Get occupancy status class
  const getOccupancyStatusClass = (shelter: Shelter) => {
    const percentage = getOccupancyPercentage(shelter);
    if (percentage < 50) return "low-occupancy";
    if (percentage < 80) return "medium-occupancy";
    return "high-occupancy";
  };

  return (
    <div className="shelter-locator-page">
      <div className="shelter-locator-content">
        <NavigationBar />

        <div className="shelter-locator-main">
          <div className={`shelter-locator-header ${animateHeader ? 'animate' : ''}`}>
            <h1 className="page-title">Shelter Locator</h1>
          </div>

          <div className="shelter-locator-container">
            <div className="map-container">
              {!loading && (
                <MapContainer
                  center={mapCenter}
                  zoom={9}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {shelters.map(shelter => (
                    <Marker
                      key={shelter.id}
                      position={shelter.coordinates}
                      icon={shelterIcon}
                      eventHandlers={{
                        click: () => {
                          setSelectedShelter(shelter);
                        }
                      }}
                    >
                      <Popup>
                        <div className="shelter-popup">
                          <h3>{shelter.name}</h3>
                          <p>{shelter.address}, {shelter.city}</p>
                          <p className="occupancy-info">
                            Occupancy: <span className={getOccupancyStatusClass(shelter)}>
                              {shelter.occupancy}/{shelter.capacity} ({getOccupancyPercentage(shelter)}%)
                            </span>
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              )}

              {loading && (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p>Loading shelter locations...</p>
                </div>
              )}
            </div>

            <div className="shelter-list-container">
              <h2>Available Shelters</h2>

              {loading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                </div>
              ) : (
                <div className="shelter-list">
                  {shelters.map(shelter => (
                    <div
                      key={shelter.id}
                      className={`shelter-card ${selectedShelter?.id === shelter.id ? 'selected' : ''}`}
                      onClick={() => setSelectedShelter(shelter)}
                    >
                      <div className="shelter-card-header">
                        <h3>{shelter.name}</h3>
                        <div className={`occupancy-badge ${getOccupancyStatusClass(shelter)}`}>
                          {getOccupancyPercentage(shelter)}%
                        </div>
                      </div>

                      <p className="shelter-address">{shelter.address}, {shelter.city}</p>

                      <div className="shelter-amenities">
                        {shelter.amenities.map((amenity, index) => (
                          <span key={index} className="amenity-tag">{amenity}</span>
                        ))}
                      </div>

                      <div className="shelter-footer">
                        <span className="capacity-info">
                          {shelter.occupancy}/{shelter.capacity} people
                        </span>
                        <span className="update-time">
                          Updated {shelter.lastUpdated}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {selectedShelter && (
            <div className="shelter-details">
              <div className="shelter-details-header">
                <h2>{selectedShelter.name}</h2>
                <button className="close-button" onClick={() => setSelectedShelter(null)}>×</button>
              </div>

              <div className="shelter-details-content">
                <div className="shelter-info-section">
                  <h3>Location</h3>
                  <p>{selectedShelter.address}</p>
                  <p>{selectedShelter.city}, Puerto Rico</p>
                </div>

                <div className="shelter-info-section">
                  <h3>Capacity</h3>
                  <div className="capacity-bar-container">
                    <div
                      className={`capacity-bar ${getOccupancyStatusClass(selectedShelter)}`}
                      style={{ width: `${getOccupancyPercentage(selectedShelter)}%` }}
                    ></div>
                  </div>
                  <p>{selectedShelter.occupancy} of {selectedShelter.capacity} spaces occupied</p>
                </div>

                <div className="shelter-info-section">
                  <h3>Amenities</h3>
                  <div className="amenities-grid">
                    {selectedShelter.amenities.map((amenity, index) => (
                      <div key={index} className="amenity-item">
                        <div className="amenity-icon">{amenity[0]}</div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="shelter-info-section">
                  <h3>Last Updated</h3>
                  <p>{selectedShelter.lastUpdated}</p>
                </div>
              </div>

              <div className="shelter-details-footer">
                <button className="directions-button">Get Directions</button>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ShelterLocatorPage; 