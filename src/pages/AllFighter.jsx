import React from "react";
import { FaPlus } from "react-icons/fa";
import "../assets/css/AllFighter.css";

import Fighter1 from "../assets/images/Fighter1.png";
import Fighter2 from "../assets/images/Fighter2.png";
import Fighter3 from "../assets/images/Fighter3.png";
import Fighter4 from "../assets/images/Fighter4.png";
import Fighter5 from "../assets/images/Fighter5.png";
import Fighter6 from "../assets/images/Fighter6.png";
import Fighter7 from "../assets/images/Fighter7.png";

const AllFighter = () => {
  return (
    <section className="fighter-section">
      <h2 className="fighter-title">All Fighter</h2>

      <div className="fighter-grid">

        <div className="fighter-item item1">
          <img src={Fighter1} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item2">
          <img src={Fighter2} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item3">
          <img src={Fighter3} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item4">
          <img src={Fighter4} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item5">
          <img src={Fighter5} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item6">
          <img src={Fighter6} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

        <div className="fighter-item item7">
          <img src={Fighter7} alt="" />
          <div className="overlay"><div className="icon-circle"><FaPlus /></div></div>
        </div>

      </div>
    </section>
  );
};

export default AllFighter;