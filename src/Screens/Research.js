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
    <h1 className="headers">Research</h1>
    <MDBCardGroup id="researchID">
      <MDBCard style={{ margin: "0% 2% 5% 2%" }}>
        <a href="/understanding-of-local-structure-on-global-scale">
          <MDBCardTitle
            style={{
              textAlign: "center",
              margin: "8% 4% 8% 4%",
              color: "#4F4F4F",
            }}
          >
            {Research1}
          </MDBCardTitle>
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
          <MDBCardText>{Research1Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn
              href="/understanding-of-local-structure-on-global-scale"
              id="readMoreButton"
            >
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="/in-situ-processing-of-quantum-materials">
          <MDBCardTitle
            style={{
              textAlign: "center",
              margin: "8% 4% 8% 4%",
              color: "#4F4F4F",
            }}
          >
            {Research2}
          </MDBCardTitle>
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
          <MDBCardText>{Research2Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn
              href="/in-situ-processing-of-quantum-materials"
              id="readMoreButton"
            >
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="/probing-local-properties">
        <MDBCardTitle style={{ textAlign: "center", margin: "8% 4% 8% 4%", color: "#4F4F4F" }}>
          {Research3}
        </MDBCardTitle>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
            style={{ display: "block" }}
          >
            <MDBCardImage
              href="/probing-local-properties"
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
          <MDBCardText id="propertiesText">{Research3Description}</MDBCardText>
          <MDBCardFooter>
            <MDBBtn href="/probing-local-properties" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default Research;
