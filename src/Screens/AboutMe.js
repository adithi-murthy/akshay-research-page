import { MDBIcon } from "mdb-react-ui-kit";
import {Name, JobTitle, AboutMeText, Publication1, Publication2} from "../Text/AboutMe"

const AboutMe = (
  <div>
    <h1>{Name}</h1>
    <h2>{JobTitle}</h2>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#0082ca" }}
      href="#!"
      role="button"
    >
      <MDBIcon fab icon="linkedin-in" />
    </a>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#dd4b39" }}
      href="#!"
      role="button"
    >
      <MDBIcon far icon="envelope" />
    </a>
    <a
      className="btn btn-primary btn-floating m-1"
      style={{ backgroundColor: "#55acee" }}
      href="#!"
      role="button"
    >
      <MDBIcon fab icon="twitter" />
    </a>
    <p>
      {AboutMeText}
    </p>
    <a href="#" className="link" style={{fontWeight: "bold"}}>
      DOWNLOAD CV
    </a>
    <h3 style={{ marginTop: "5%" }}>Latest Publications:</h3>
    <a href="#" className="link">
      {Publication1}
    </a>
    <br></br>
    <a href="#" className="link">
      {Publication2}
    </a>
  </div>
);

export default AboutMe;
