import React from "react";
import picture from "../assets/person.jpeg";
import NWLogo from "../assets/Northwestern-logo.jpeg";
import UIUCLogo from "../assets/Illinois-logo.jpg";
import AboutMe from "./AboutMe";
import { NorthwesternEducation, UIUCEducation } from "../Text/Education";
import Research from "./Research";
import PublicationsText from "./Publications";
import "./Home.css";
import { logDOM } from "@testing-library/react";

const Home = () => {
  return (
    <div>
      <a id="about-me"></a>
      <div className="aboutMeDiv">
        <img src={picture} alt="Me" id="aboutMeImg" />
        <div id="aboutMeText">{AboutMe}</div>
      </div>
      <div id="education"></div>
      <h1 className="headers">
        <u>Education</u>
      </h1>
      <div className="overallDiv">
        <img src={NWLogo} alt="Northwestern-Logo" id="NWImg" />
        <div id="NWText">{NorthwesternEducation}</div>
      </div>
      <div className="overallDiv">
        <img src={UIUCLogo} alt="UIUC-Logo" id="UIUCImg" />
        <div id="UIUCText">{UIUCEducation}</div>
      </div>
      <div id="research"></div>
      <div>
        <div>{Research}</div>
      </div>
      <div id="publications"></div>
      <div>
        <div className="publicationsDivHome">{PublicationsText}</div>
      </div>
    </div>
  );
};

export default Home;
