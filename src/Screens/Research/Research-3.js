import React from "react";
import { Research3Text } from "../../Text/IndividualResearchPages/Research-3";
import Research3Figure from "../../assets/Figure3.png";
import { Research3Publication1, Research3Publication2 } from "../../Text/IndividualResearchPages/Research-3";

const Research3 = () => {
  return (
    <div>
      <div className="researchDiv">
        <img src={Research3Figure} alt="Probing Emergent Phenomena" id="research3Figure" />
        <div id="research3Text">{Research3Text}</div>
      </div>
      <div className="relatedPublications">
        <h3>Related Publications:</h3>
        <ol>
          <li>{Research3Publication1}</li>
          <li>{Research3Publication2}</li>
        </ol>
      </div>
    </div>
  );
};

export default Research3;
