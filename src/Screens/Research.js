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
import Figure1 from "../assets/Figure1.jpeg";
import Figure2 from "../assets/Figure2.jpeg";
import Figure3 from "../assets/Figure3.png";
import {
  Research1,
  Research1Description,
  Research2,
  Research2Description,
  Research3,
  Research3Description,
  ResearchIntro,
} from "../Text/Research";
import "./Research.css";
const Research = (
  <>
    <h1 className="headers">Research</h1>
    <div id="researchIntro">{ResearchIntro}</div>
    <MDBCardGroup id="researchID">
      <MDBCard style={{ margin: "0% 2% 5% 2%" }}>
        <a href="/investigating-structural-dynamics">
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
              alt="Investigating-Structural-Dynamics"
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
              href="/investigating-structural-dynamics"
              id="readMoreButton"
            >
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="identifying-chemical-impurities">
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
              alt="Identifying-Chemical-Impurities"
              className="researchCardImage"
              id="impuritiesImg"
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
            <MDBBtn href="identifying-chemical-impurities" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ margin: "0% 2% 5% 0%" }}>
        <a href="/probing-emergent-phenomena">
          <MDBCardTitle
            style={{
              textAlign: "center",
              margin: "8% 4% 8% 4%",
              color: "#4F4F4F",
            }}
          >
            {Research3}
          </MDBCardTitle>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
            style={{ display: "block" }}
          >
            <MDBCardImage
              href="/probing-emergent-phenomena"
              src={Figure3}
              alt="probing-emergent-phenomena"
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
            <MDBBtn href="/probing-emergent-phenomena" id="readMoreButton">
              Read More
            </MDBBtn>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default Research;
