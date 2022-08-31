import React from "react";
import picture from "../assets/person.jpeg";
import exampleTimeline from "../assets/example-timeline.png";
import universities from "../assets/universities.jpg";
import timeline from "../assets/timeline.png";
import AboutMe from "./AboutMe";
import EducationText from "../Text/Education";
import Research from "./Research";
import PublicationsText from "./Publications";
import "./Home.css";

// const styles = {
//   overallDiv: {
//     display: "flex",
//     alignItems: "flex-start",
//   },
//   aboutMeImg: {
//     margin: "5% 0% 5% 15%",
//   },
//   aboutMeText: {
//     margin: "5% 5% 0% 5%",
//   },
//   educationImg: {
//     margin: "5% 0% 0% 5%",
//   },
//   educationText: {
//     margin: "5% 5% 0% 0%",
//   },
//   timelineImg: {
//     height: "200px",
//     width: "auto",
//     margin: "5% 0% 0% 0%",
//   },
//   exampleTimeline: {
//     height: "300px",
//     width: "auto",
//     margin: "5% 0% 0% -15%",
//   },
//   publications: {
//     margin: "5% 0% 0% 15%",
//   },
// };
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
        <div>
          <img src={exampleTimeline} id="exampleTimeline" />
          <img src={universities} alt="universities" id="educationImg" />
        </div>
      </div>
      <div id="research"></div>
      <div>
        <div>{Research}</div>
      </div>
      <div id="publications"></div>
      <div className="publicationsDivHome">{PublicationsText}</div>
    </div>
  );
};

export default Home;
