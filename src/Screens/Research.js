import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Figure1 from "../assets/Figure1.png";
import Figure2 from "../assets/Figure2.png";
import Figure3 from "../assets/Figure3.png";
import { Research1, Research1Description, Research2, Research2Description, Research3, Research3Description } from "../Text/Research";
const Research = (
  <>
  <h1>Research</h1>
    <MDBCardGroup>
      <MDBCard>
        <a href="/research-1">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={Figure1} id="Structure"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
              ></div>
            </a>
          </MDBRipple>
        </a>
        <MDBCardBody>
          <MDBCardTitle>{Research1}</MDBCardTitle>
          <MDBCardText>
            {Research1Description}
          </MDBCardText>
          <MDBBtn href="/research-1">Read More</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 30 mins ago</small>
        </MDBCardFooter>
      </MDBCard>

      <MDBCard>
        <a href="/research-2">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={Figure2} id="Processing"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
              ></div>
            </a>
          </MDBRipple>
        </a>
        <MDBCardBody>
          <MDBCardTitle>{Research2}</MDBCardTitle>
          <MDBCardText>
            {Research2Description}
          </MDBCardText>
          <MDBBtn href="/research-2">Read More</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 30 mins ago</small>
        </MDBCardFooter>
      </MDBCard>
      <MDBCard>
        <a href="/research-3">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              href="/research-3"
              src={Figure3} id="Properties"
              fluid
              alt="..."
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.25)" }}
            ></div>
          </MDBRipple>
        </a>
        <MDBCardBody>
          <MDBCardTitle>{Research3}</MDBCardTitle>
          <MDBCardText>
            {Research3Description}
          </MDBCardText>
          <MDBBtn href="/research-3">Read More</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 30 mins ago</small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default Research;
