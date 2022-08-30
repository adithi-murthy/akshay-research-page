import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBCardFooter,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Figure1 from "../assets/Figure1.png";
import Figure2 from "../assets/Figure2.png";
import Figure3 from "../assets/Figure3.png";
import {
  Research1,
  Research1Description,
  Research2,
  Research2Description,
  Research3,
  Research3Description,
} from "../Text/Research";
import "./Research.css";
const Research = (
  <>
    <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Research</h1>
    <MDBCardGroup id="researchID">
      <MDBCard style={{ margin: "0% 2% 5% 2%" }}>
        <a href="/research-1">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
            style={{ display: "block" }}
          >
            <MDBCardImage
              src={Figure1}
              alt="Structure"
              className="researchCardImage"
              id="structureImg"
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
              ></div>
            </a>
          </MDBRipple>
        </a>
        <MDBCardBody style={{ textAlign: "center" }}>
          <MDBCardTitle>{Research1}</MDBCardTitle>
          <MDBCardText>{Research1Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn href="/research-1" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="/research-2">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
            style={{ display: "block" }}
          >
            <MDBCardImage
              src={Figure2}
              alt="Processing"
              className="researchCardImage"
              id="processingImg"
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
              ></div>
            </a>
          </MDBRipple>
        </a>
        <MDBCardBody style={{ textAlign: "center" }}>
          <MDBCardTitle>{Research2}</MDBCardTitle>
          <MDBCardText>{Research2Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn href="/research-2" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="/research-3">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
            style={{ display: "block" }}
          >
            <MDBCardImage
              href="/research-3"
              src={Figure3}
              alt="Properties"
              id="propertiesImg"
              className="researchCardImage"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
            ></div>
          </MDBRipple>
        </a>
        <MDBCardBody style={{ textAlign: "center" }}>
          <MDBCardTitle>{Research3}</MDBCardTitle>
          <MDBCardText id="propertiesText">{Research3Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn href="/research-3" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default Research;
