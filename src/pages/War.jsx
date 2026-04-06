import React from "react";
// import "./WarSection.css";
import "../assets/css/War.css"
import bgImg from "../assets/images/latestwar.png";
import logo from "../assets/images/logo.png";          // Main Center Logo
import warlogo1 from "../assets/images/warlogo1.png"; // Left Team Logo
import warlogo2 from "../assets/images/warlogo2.png"; // Right Team Logo

const WarSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* LEFT SIDE LIST */}
        <div className="col-md-5">

          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="fight-row">

              {/* LEFT PART (Logo + Score + Logo) */}
              <div className="fight-left">
                <img src={warlogo1} alt="team1" className="mini-logo" />
                <span className="score-text">190</span>
                <span className="vs-text">vs</span>
                <span className="score-text">189</span>
                <img src={warlogo2} alt="team2" className="mini-logo" />
              </div>

              {/* RIGHT PART (Date + Title) */}
              <div className="fight-right">
                <p className="fight-date">27 June 2020</p>
                <h6 className="fight-title">Open War Challenge</h6>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE IMAGE CARD */}
        <div className="col-md-7">

          <div className="fight-card">

            {/* Background Image */}
            <img src={bgImg} alt="fight" className="fight-img" />

            {/* Content Over Image */}
            <div className="fight-content text-center text-white">

              {/* Main Logo (logo.png) */}
              <img src={logo} alt="main-logo" className="main-logo mb-3" />

              <h3>Open War Challenge</h3>
              <p>27 June, 2020</p>
            </div>

            {/* VS Section */}
            <div className="vs-section">
              <img src={warlogo1} alt="team1" className="side-logo" />
              <h1 className="score">190 VS 189</h1>
              <img src={warlogo2} alt="team2" className="side-logo" />
            </div>

            {/* Hover Button */}
            <button className="watch-btn">
              View Fight
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default WarSection;