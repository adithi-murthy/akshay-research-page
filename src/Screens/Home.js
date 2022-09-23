import React, { useEffect } from "react";
import picture from "../assets/person.jpeg";
import NWLogo from "../assets/Northwestern-logo.jpeg";
import UIUCLogo from "../assets/Illinois-logo.jpg";
import AboutMe from "./AboutMe";
import { NorthwesternEducation, UIUCEducation } from "../Text/Education";
import Research from "./Research";
import PublicationsText from "./Publications";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <a id="about-me"></a>
      <div className="aboutMeDiv">
        <img src={picture} alt="Me" id="aboutMeImg" />
        <div id="aboutMeText">{AboutMe}</div>
      </div>
      <div id="education"></div>
      <div data-aos="fade-right">
        <h1 className="headers">Education</h1>
        <div className="overallDiv">
          <img src={NWLogo} alt="Northwestern-Logo" id="NWImg" />
          <div id="NWText">{NorthwesternEducation}</div>
        </div>
      </div>
      <div data-aos="fade-left">
        <div className="overallDiv">
          <img src={UIUCLogo} alt="UIUC-Logo" id="UIUCImg" />
          <div id="UIUCText">{UIUCEducation}</div>
        </div>
      </div>
      <div id="research"></div>
      <div data-aos="fade-right">
        <div>
          <div>{Research}</div>
        </div>
      </div>
      <div id="publications"></div>
      <div data-aos="fade-left">
        <div>
          <div className="publicationsDivHome">{PublicationsText}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
