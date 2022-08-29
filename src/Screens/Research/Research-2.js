import React from "react";
import { Research2Text } from "../../Text/IndividualResearchPages/Research-2";
import Research2Figure from "../../assets/Figure2.png";

const styles = {};
const Research2 = () => {
  return(
    <div>
      <div className="researchDiv">
        <img src={Research2Figure} id="research2Figure" />
        <div id="research2Text">{Research2Text}</div>
      </div>
      <h3 style={{ margin: "2.5% 0% 0% 5%" }}>Related Publications:</h3>
      <ol>
        <li>{}</li>
        <li>{}</li>
      </ol>
    </div>
  )
};

export default Research2;
