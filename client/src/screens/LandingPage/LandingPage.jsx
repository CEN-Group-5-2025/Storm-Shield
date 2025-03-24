import React from "react";
import Footer from "../../components/Footer/Footer";
import { HeroSection } from "../../components/HeroSection";
import HurricaneAlert from "../../components/HurricaneAlert/HurricaneAlert";
import { NavigationBar } from "../../components/NavigationBar";
import ShelterLocator from "../../components/ShelterLocator/ShelterLocator";
import VolunteerHelp from "../../components/VolunteerHelp/VolunteerHelp";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <NavigationBar />
        <HeroSection />

        <div className="landing-info-wrapper">
          <div className="landing-info">
            <p className="p">Become a Volunteer or Search Volunteers</p>

            <div className="div-wrapper">
              <div className="text-wrapper-3">Sign Up</div>
            </div>

            <div className="rectangle-3" />

            <div className="in-case-of-emergency-wrapper">
              <p className="in-case-of-emergency">
                <span className="span">In case of emergency, dial</span>

                <span className="text-wrapper-4">&nbsp;</span>

                <span className="text-wrapper-5">
                  911
                  <br />
                </span>

                <span className="text-wrapper-6">
                  FEMA Disaster Relief Helpline:
                </span>

                <span className="text-wrapper-4">&nbsp;</span>

                <span className="text-wrapper-5">1-800-621-3362</span>
              </p>
            </div>
          </div>
        </div>

        <div className="landing-buttons">
          <HurricaneAlert />
          <ShelterLocator />
          <VolunteerHelp />
        </div>
      </div>
      <Footer />
    </div>
  );
};
