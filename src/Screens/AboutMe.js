import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import {
  Name,
  JobTitle,
  AboutMeText,
  Publication1,
  Publication2,
  Publication3,
  Publication4,
  Publication1Link,
  Publication2Link,
  Publication3Link,
  Publication4Link,
} from "../Text/AboutMe";
import Pdf from "../assets/Murthy_CV.pdf";
import Google_Scholar_logo from "../assets/Google_Scholar_logo.svg.png";

const AboutMe = (
  <div>
    <h1>{Name}</h1>
    <h2 style={{ marginBottom: "3%" }}>{JobTitle}</h2>
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
      href="mailto: amurthy@fnal.gov"
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
    <p style={{ marginTop: "3%" }}>{AboutMeText}</p>
    <p>
    <MDBBtn style={{ backgroundColor: 'black' }} href={Pdf}>
      <MDBIcon className='me-2' fas icon='download' /> DOWNLOAD CV
    </MDBBtn>
      <h3 style={{ marginTop: "5%" }}>
        Recent Press Releases:
        <a href="https://scholar.google.com/citations?user=k7on3FAAAAAJ&hl=en">
          <img
            src={Google_Scholar_logo}
            alt="Google Scholar"
            height="38px"
            width="auto"
            id="googleScholarLogo"
          ></img>
        </a>
      </h3>
      <ol className="latestPressBullets">
        <li>
          <a href={Publication1Link} className="link">
            {Publication1}
          </a>
        </li>
        <li>
          <a href={Publication2Link} className="link">
            {Publication2}
          </a>
        </li>
        <li>
          <a href={Publication3Link} className="link">
            {Publication3}
          </a>
        </li>
        <li>
          <a href={Publication4Link} className="link">
            {Publication4}
          </a>
        </li>
      </ol>
    </p>
  </div>
);

export default AboutMe;
