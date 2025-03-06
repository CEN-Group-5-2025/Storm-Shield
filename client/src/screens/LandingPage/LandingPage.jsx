import React from "react";
import { MainMenuWrapper } from "../../components/MainMenuWrapper";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="overlap">
          <div className="rectangle" />

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/gQA6tID1/img/image-1.png"
          />

          <div className="rectangle-2" />

          <div className="text">
            <div className="overlap-group">
              <div className="alerts-shelter">ALERTS. SHELTER. SUPPORT.</div>

              <p className="here-for-the-people">
                Here For The People Of Puerto Rico.
              </p>
            </div>
          </div>

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
            <div className="overlap-2">
              <div className="text-wrapper-7">GET HURRICANE ALERTS</div>

              <img
                className="material-symbols"
                alt="Material symbols"
                src="https://c.animaapp.com/gQA6tID1/img/material-symbols-warning-rounded.svg"
              />

              <p className="text-wrapper-8">
                Live updates on weather conditions across Puerto Rico
              </p>
            </div>

            <div className="overlap-3">
              <div className="text-wrapper-9">VIEW NEAREST SHELTER</div>

              <img
                className="ic-baseline-house"
                alt="Ic baseline house"
                src="https://c.animaapp.com/gQA6tID1/img/ic-baseline-house.svg"
              />

              <p className="text-wrapper-8">
                Locate your closest shelter using our interactive map
              </p>
            </div>

            <div className="overlap-4">
              <img
                className="img"
                alt="Rectangle"
                src="https://c.animaapp.com/gQA6tID1/img/rectangle-10.svg"
              />

              <div className="VOLUNTEER-FIND-HELP">
                VOLUNTEER &amp; FIND HELP
              </div>

              <img
                className="material-symbols-2"
                alt="Material symbols"
                src="https://c.animaapp.com/gQA6tID1/img/material-symbols-volunteer-activism-rounded.svg"
              />

              <p className="text-wrapper-10">
                Sign up to be a volunteer or to be matched with volunteers
              </p>
            </div>
          </div>
        </div>

        <MainMenuWrapper className="design-component-instance-node" />
        <div className="group-2">
          <div className="group-wrapper">
            <div className="group-3">
              <div className="text-wrapper-11">STORMSHIELD © 2025</div>
            </div>
          </div>

          <div className="group-4">
            <div className="group-5">
              <div className="text-wrapper-11">PRIVACY POLICY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
