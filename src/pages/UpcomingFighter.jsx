import React from "react";
import { Container } from "react-bootstrap";
import "../assets/css/UpcomingFighter.css";
import bgImage from "../assets/images/dragon-bg.png";

const UpcomingFighter = () => {
  return (
    <section
      className="fighter-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container className="fighter-content text-white text-center">
        
        {/* Top Title */}
        <h2 className="top-title">Upcoming Fighter</h2>

        {/* Center Content */}
        <div className="center-content">
          <h3 className="fighter-name">Dark Dragon</h3>

          <div className="countdown d-flex justify-content-center gap-5">
            <div>
              <h1>-2347</h1>
              <p>Days</p>
            </div>

            <div>
              <h1>17</h1>
              <p>Hours</p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default UpcomingFighter;