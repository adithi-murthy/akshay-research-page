import React from "react";
import { Research1Text } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication1 } from "../../Text/IndividualResearchPages/Research-1";
import { Research1Publication2 } from "../../Text/IndividualResearchPages/Research-1";
import Research1Figure from "../../assets/Figure1.png";
import "./Research.css";
import "../Home.css";

const styles = {};
const Research1 = () => {
  return (
    <div>
      <div className="researchDiv">
        {/* <div> */}
        {/* <img src={picture} alt="Me" id="aboutMeImg" /> */}
        <img src={Research1Figure} id="research1Figure" />
        {/* <div id="aboutMeText">{AboutMe}</div> */}
        <br></br>
        <p id="research1Text">{Research1Text}</p>
      </div>
      {/* </div> */}

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
    </div>
  );
};

export default Research1;
