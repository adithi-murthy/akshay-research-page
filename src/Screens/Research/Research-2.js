import React from "react";
import { Research2Text } from "../../Text/IndividualResearchPages/Research-2";
import Research2Figure from "../../assets/Figure2.png";

const styles = {};
const Research2 = () => {
  return(
  <div>
    <div>
    <img src={Research2Figure} id="Research2Figure" /> 
    </div>
    <div>
    <div style={{ marginLeft: "30%" }}>{Research2Text}</div>
    </div>
  </div>)
};

export default Research2;
