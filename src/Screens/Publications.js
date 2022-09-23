import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  Publication1,
  Publication1Description,
  Publication1Link,
  Publication2,
  Publication2Description,
  Publication2Link,
  Publication3,
  Publication3Description,
  Publication3Link,
} from "../Text/Publications";
import "./Publications.css";
import SIMS from "../assets/publication_images/SIMS.png";
import DPC from "../assets/publication_images/DPC.png";
import TOC from "../assets/publication_images/TOC.jpg";

const styles = {
  card: {
    marginBottom: "3%",
    maxWidth: "1000px",
  },
  img: {
    margin: "0% 0% 0% 0%",
  },
  button: {
    margin: "1% 0% 5% 60%",
  },
  divvy: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
};

const PublicationsText = (
  <div>
    <div className="publicationsDiv">
      <h1>Publications</h1>
      <MDBBtn
        className=""
        color="dark"
        id="allPublicationsButton"
        href="/publications"
      >
        All Publications
      </MDBBtn>
    </div>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src={TOC}
            id="Decoherence Mechanisms"
            alt="..."
            fluid
            className="publicationImages"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication1}</MDBCardTitle>
            <MDBCardText>{Publication1Description}</MDBCardText>
            <a href={Publication1Link} className="link">
              Read the publication here
            </a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src={SIMS}
            id="TOF-SIMS"
            alt="..."
            fluid
            className="publicationImages"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication2}</MDBCardTitle>
            <MDBCardText>{Publication2Description}</MDBCardText>
            <a href={Publication2Link} className="link">
              Read the publication here
            </a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src={DPC}
            id="DPC"
            alt="..."
            fluid
            className="publicationImages"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication3}</MDBCardTitle>
            <MDBCardText>{Publication3Description}</MDBCardText>
            <a href={Publication3Link} className="link">
              Read the publication here
            </a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  </div>
);

export default PublicationsText;
