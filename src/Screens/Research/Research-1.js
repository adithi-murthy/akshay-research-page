import React from "react";
import { Research1Text } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication1, Research1Publication2 } from "../../Text/IndividualResearchPages/Research-1";
import Research1Figure from "../../assets/Figure1.png";
import "./Research123.css";

const Research1 = () => {
  return (
    <div>
      <div className="researchDiv">
        <img src={Research1Figure} id="research1Figure" />
        <div id="research1Text" alt="Understanding of Local Structure on Global Scale">{Research1Text}</div>
      </div>
      <div className="relatedPublications" >
      <h3>Related Publications:</h3>
      <ol>
        <li>{Research1Publication1}</li>
        <li>{Research1Publication2}</li>
      </ol>
      </div>
    </div>
  );
};

export default Research1;
