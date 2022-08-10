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
import { Publication1, Publication1Description, Publication1Link, Publication2, Publication2Description, Publication2Link, Publication3, Publication3Description, Publication3Link} from "../Text/Publications";


const styles = {
  card: {
    marginBottom: "3%",
    maxWidth: "1000px",
  },
  img:{
    margin: "0% 0% 0% 0%"
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
    <div style={styles.divvy}>
      <h1>Publications</h1>
      <MDBBtn
        className=""
        color="dark"
        style={styles.button}
        href="/publications"
      >
        All Publications
      </MDBBtn>
    </div>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage 
            src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
            alt="..."
            fluid
            style={styles.img}
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication1}</MDBCardTitle>
            <MDBCardText>
              {Publication1Description}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
            <a href={Publication1Link} className="link">Read the publication here</a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication2}</MDBCardTitle>
            <MDBCardText>
              {Publication2Description}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
            <a href={Publication2Link} className="link">Read the publication here</a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard style={styles.card}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{Publication3}</MDBCardTitle>
            <MDBCardText>
              {Publication3Description}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
            <a href={Publication3Link} className="link">Read the publication here</a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  </div>
);

export default PublicationsText;
