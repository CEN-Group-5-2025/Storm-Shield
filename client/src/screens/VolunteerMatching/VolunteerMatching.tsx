import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./volunteer-matching.css";

export const VolunteerMatching = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true);
    }, 300);
  }, []);

  const handleVolunteerButtonClick = () => {
    navigate('/volunteer-form');
  };

  const handleRequestAssistanceClick = () => {
    navigate('/volunteer-request');
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-content">
        <NavigationBar />

        <main className="volunteer-main">
          <div className={`volunteer-header ${animateHeader ? 'animate' : ''}`}>
            <h1 className="page-title">Volunteer Matching</h1>
            <p className="volunteer-subtitle">
              Connect with those who need help or offer your assistance during and after
              disaster events. StormShield helps match volunteers with people in need.
            </p>
          </div>

          <div className="volunteer-options">
            <div className="volunteer-option">
              <h2 className="option-title">Find a Volunteer</h2>
              <p className="option-description">
                Need assistance with evacuation, supplies, shelter, or other emergency needs?
                Request help from our community of verified volunteers.
              </p>
              <button className="option-button" onClick={handleRequestAssistanceClick}>Request Assistance</button>
            </div>

            <div className="volunteer-option">
              <h2 className="option-title">Become a Volunteer</h2>
              <p className="option-description">
                Have skills, resources, or time to help others during emergency situations?
                Register as a volunteer to be matched with those in need.
              </p>
              <button className="option-button" onClick={handleVolunteerButtonClick}>Register as Volunteer</button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}; 