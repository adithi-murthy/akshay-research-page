import React from "react";
import picture from "../assets/person.jpeg";
import AboutMeText from "../Text/AboutMe";
import EducationText from "../Text/Education";
import ResearchText from "../Text/Research";
import PublicationsText from "../Text/Publications";

const styles = {
  overallDiv: {
    display: "flex",
    alignItems: "flex-start",
  },
  aboutMeImg: {
    margin: "5% 0% 5% 15%",
  },
  aboutMeText: {
    margin: "5% 5% 0% 5%",
  },
  educationImg: {
    margin: "5% 0% 15% 15%",
  },
  educationText: {
    margin: "5% 5% 0% 15%",
  },
};
const Home = () => {
  return (
    <div>
      <div id="about-me" style={styles.overallDiv}>
        <img src={picture} alt="Me" style={styles.aboutMeImg} />
        <div style={styles.aboutMeText}>{AboutMeText}</div>
      </div>
      <div id="education" style={styles.overallDiv}>
        <div style={styles.educationText}>{EducationText}</div>
        <img src={picture} alt="Me" style={styles.educationImg} />
      </div>
      <div id="research" style={styles.overallDiv}>
        <img src={picture} alt="Me" style={styles.aboutMeImg} />
        <div style={styles.aboutMeText}>{ResearchText}</div>
      </div>
      <div id="publications" style={styles.overallDiv}>
        <img src={picture} alt="Me" style={styles.aboutMeImg} />
        <div style={styles.aboutMeText}>{PublicationsText}</div>
      </div>
    </div>
  );
};

export default Home;
