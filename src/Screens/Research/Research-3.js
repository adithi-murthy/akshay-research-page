import React from "react";
import { Research3Text } from "../../Text/IndividualResearchPages/Research-3";
import Research3Figure from "../../assets/Figure3.png";

const styles = {};
const Research3 = () => {
  return(
  <div>
    <div>
    <img src={Research3Figure} id="Research3Figure" /> 
    </div>
    <div>
    <div style={{ marginLeft: "30%" }}>{Research3Text}</div>
    </div>
  </div>)
};

export default Research3;
