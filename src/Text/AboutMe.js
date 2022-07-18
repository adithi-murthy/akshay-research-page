import { MDBIcon } from "mdb-react-ui-kit";

const AboutMeText = (
  <div>
    <h1>FirstName LastName</h1>
    <h2>Researcher at Company</h2>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
      faucibus turpis. Pellentesque tempor rutrum dignissim. Quisque egestas
      luctus commodo. Vestibulum congue convallis quam, eu rhoncus felis sodales
      quis. Suspendisse tincidunt quis urna at tristique. Vestibulum semper
      euismod dapibus. Donec placerat nisl vehicula erat tempor dapibus. Aliquam
      porttitor purus sem, ut ultrices enim placerat eget. Nulla vitae mi
      faucibus, auctor massa in, auctor augue. Morbi eu est pharetra, mollis leo
      quis, porttitor erat. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Donec in orci a nisi rhoncus
      tempor et et dolor. Quisque lectus nunc, condimentum eu leo id, pulvinar
      aliquet massa. Sed bibendum sapien sit amet ex luctus, et finibus enim
      fermentum. Fusce vitae turpis mollis, suscipit sapien sed, sodales elit.
    </p>
    <a href="#">DOWNLOAD CV</a>
    <h3>Latest Publications</h3>
    <a href="#">
      <p>Publication #1</p>
    </a>
    <a href="#">
      <p>Publication #2</p>
    </a>
  </div>
);

export default AboutMeText;
