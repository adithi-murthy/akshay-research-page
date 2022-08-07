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
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
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
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 3 mins ago</small>
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
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
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
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 3 mins ago</small>
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
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
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
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default Research;
