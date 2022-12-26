import React from "react";
import { Research2Text } from "../../Text/IndividualResearchPages/Research-2";
import Research2Figure from "../../assets/Figure2.jpeg";
import {
  Research2Publication1,
  Research2Publication2,
} from "../../Text/IndividualResearchPages/Research-2";

const Research2 = () => {
  return (
    <div>
      <div className="researchDiv">
        <img
          src={Research2Figure}
          alt="Identifying Chemical Impurities"
          id="research2Figure"
        />
        <div id="research2Text">{Research2Text}</div>
      </div>
      <div className="relatedPublications">
        <h3>Related Publications:</h3>
        <ol>
          <li>{Research2Publication1}</li>
          <li>{Research2Publication2}</li>
        </ol>
      </div>
    </div>
  );
};

export default Research2;
