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
const ResearchText = (
  <>
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
          <MDBCardTitle>Research 1</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
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
          <MDBCardTitle>Research 2</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
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
          <MDBCardTitle>Research 3</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>
    </MDBCardGroup>
  </>
);
export default ResearchText;
