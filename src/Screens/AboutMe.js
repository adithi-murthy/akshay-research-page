import { MDBIcon } from "mdb-react-ui-kit";
import {
  Name,
  JobTitle,
  AboutMeText,
  Publication1,
  Publication2,
  Publication1Link,
  Publication2Link,
  CVLink,
} from "../Text/AboutMe";
import Pdf from "../assets/Murthy_CV.pdf";
import Google_Scholar_logo from "../assets/Google_Scholar_logo.svg.png";

const AboutMe = (
  <div>
    <h1>{Name}</h1>
    <h2>{JobTitle}</h2>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#0082ca" }}
      href="https://www.linkedin.com/in/akshaymurthy1/"
      role="button"
    >
      <MDBIcon fab icon="linkedin-in" />
    </a>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#dd4b39" }}
      href="https://scholar.google.com/citations?user=k7on3FAAAAAJ&hl=en"
      role="button"
    >
      <MDBIcon far icon="envelope" />
    </a>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#55acee" }}
      href="https://twitter.com/Akshay_A_Murthy"
      role="button"
    >
      <MDBIcon fab icon="twitter" />
    </a>
    <a href="https://scholar.google.com/citations?user=k7on3FAAAAAJ&hl=en">
      <img src={Google_Scholar_logo} alt="Google Scholar" height="38px" width="auto"></img>{" "}
    </a>
    <p>{AboutMeText}</p>
    <p>
      <a href={Pdf} className="link" style={{ fontWeight: "bold" }}>
        DOWNLOAD CV
      </a>
      <h3 style={{ marginTop: "5%" }}>Latest Publications:</h3>
      1.{" "}
      <a href={Publication1Link} className="link">
        {Publication1}
      </a>
      <br></br>
      2.{" "}
      <a href={Publication2Link} className="link">
        {Publication2}
      </a>
    </p>
  </div>
);

export default AboutMe;
