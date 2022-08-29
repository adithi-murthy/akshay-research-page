import React from "react";
import { Research1Text } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication1 } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication2 } from "../../Text/IndividualResearchPages/Research-1";
import Research1Figure from "../../assets/Figure1.png";
import "./Research.css";
import "../Home.css";

const Research1 = () => {
  return (
    <div>
      <div className="researchDiv">
        <img src={Research1Figure} id="research1Figure" />
        <div id="research1Text">{Research1Text}</div>
      </div>
      <h3 style={{ margin: "2.5% 0% 0% 5%" }}>Related Publications:</h3>
      <ol>
        <li>{Research1Publication1}</li>
        <li>{Research1Publication2}</li>
      </ol>
    </div>
  );
};

export default Research1;
