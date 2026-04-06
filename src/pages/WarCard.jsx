import React from "react";
import "../assets/css/WarCard.css";

import bgImg from "../assets/images/latestwar.png";
import logo from "../assets/images/logo.png";
import warlogo1 from "../assets/images/warlogo1.png";
import warlogo2 from "../assets/images/warlogo2.png";

const WarCard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-white mb-4 war-title">Latest War Fight</h2>

      <div className="fight-card">

        {/* Background Image */}
        <img
          src={bgImg}
          alt="latest war"
          className="img-fluid w-100 fight-img"
        />

        {/* Center Content */}
        <div className="fight-content text-center text-white">
          <img src={logo} alt="main logo" className="main-logo mb-3" />
          <h3>Open War Challenge</h3>
          <p>27 June, 2020</p>
        </div>

        {/* Bottom VS Section */}
        <div className="vs-section">
          <img src={warlogo1} alt="left logo" className="side-logo" />
          <h1 className="score">190 VS 189</h1>
          <img src={warlogo2} alt="right logo" className="side-logo" />
        </div>

        {/* Hover Button */}
        <button className="watch-btn">
          Watch Tutorial
        </button>

      </div>
    </div>
  );
};

export default WarCard;