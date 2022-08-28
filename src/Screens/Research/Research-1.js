import React from "react";
import { Research1Text } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication1 } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication2 } from "../../Text/IndividualResearchPages/Research-1";
import Research1Figure from "../../assets/Figure1.png";

const styles = {};
const Research1 = () => {
  return (
    <div>
      <div>
        <img src={Research1Figure} id="Research1Figure" />
      </div>
      <div>
        <div style={{ marginLeft: "30%" }}>{Research1Text}</div>
      </div>
      <p>
        <h3 style={{ margin: "2.5% 0% 0% 0%" }}>Related Publications:</h3>
        <ol>
          <li>
            {/* <a href="https://arxiv.org/abs/2203.08710" className="link"> */}
            {Research1Publication1}
            {/* </a> */}
          </li>
          {/* 1.{" "}
      <a href="https://arxiv.org/abs/2203.08710" className="link">
      {Research1Publication1}
    </a> */}
          {/* 2.{" "} */}
          {/* <a href="https://aip.scitation.org/doi/full/10.1063/5.0079321" className="link"> */}
          <li>{Research1Publication2}</li>
          {/* </a> */}
        </ol>
      </p>
    </div>
  );
};

export default Research1;
