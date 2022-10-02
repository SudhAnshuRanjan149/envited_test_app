import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "./LandingPage.css";

// ASSETS
// import EventLandingPage from '../../Assets/Landing page image.svg'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landingPage_container">
        <div className="LandingPage_header">
          <span className="heading">Imagine if</span>
          <span className="heading-2">Snapchat</span>
          <span className="heading">had events.</span>
        </div>
        <div className="LandingPage_header_down_label">
          Easily host and share events with your friends across any social
          media.
        </div>

        <div className="landing_page_image">
          {/* <img width="100%" hei src={EventLandingPage} alt="landing_page" /> */}
        </div>

        <div>
          <button
            onClick={() => navigate("./create")}
            className="landing_page_create_btn"
          >
            🎉Create my Event
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
