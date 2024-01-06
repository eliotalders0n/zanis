import React, { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Header from "./header";
import Sidepane from "./sidepane";
import { Link } from "react-router-dom";

function Feed(props) {
  const [show, setShow] = useState(true);

  return (
    <Container fluid style={{ backgroundColor: "black" }}>
      <Header />
      <Row>
        <Col style={{}}>
          <Sidepane />
        </Col>
        <Col style={{ marginTop: "30px" }}>
          <div
            style={{
              backgroundColor: "rgb(66,66,66)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <img
              src="assets/person.png"
              alt="somewhere4"
              style={{ borderRadius: "50px", width: "10%", marginRight: "2%" }}
            />
            <Button variant="outline-light" size="lg" style={{ width: "80%" }}>
              Create Post
            </Button>
            <Button
              variant="dark"
              className="my-2"
              size="sm"
              style={{ marginLeft: "12%" }}
            >
              Media
            </Button>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Alert
              show={show}
              style={{
                backgroundColor: "rgb(66,66,66)",
                border: "none",
                color: "white",
              }}
            >
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-dark"
                  style={{ marginBottom: "-30px" }}
                >
                  X
                </Button>
              </div>
              {/* <h1 class="display-4"><b>BFUTR2023</b> Get Your <b>VIP</b> Ticket Now</h1> */}
              <p className="lead">
                Add more to your work experiences and education{" "}
              </p>
              <Link to="https://obsidi.com/bfutr/">
                <Button variant="outline-light" style={{}}>
                  Update Profile
                </Button>
              </Link>
            </Alert>
          </div>
          <hr />
          <div
            style={{
              backgroundColor: "rgb(46,46,46)",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
              color: "white"
            }}
          >
            <Row style={{width:"60vh"}}>
              <Col md={1}>
                <img
                  src="assets/person.png"
                  style={{
                    borderRadius: "50px",
                    width: "100%",
                    marginRight: "10%",
                  }}
                  alt="somewhere3"
                />
              </Col>
              <Col md={8}>
                <h3>Uncle Waffles</h3>
              </Col>
              <Col>
                <Button variant="dark" style={{ marginLeft: "25%" }}>
                  connect
                </Button>
              </Col>
            </Row>
            {/* <hr /> */}
            <p className="lead">
              Some test content img elements must have an alt prop, either with
              meaningful text, or an empty string for decorative images{" "}
            </p>
            <p className="lead">
              an alt prop, either with meaningful text, or{" "}
            </p>
            <img
              src="assets/img2.jpg"
              alt="an3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <hr/>
            <Row>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/like.png"/>  Like</Button></Col>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/share.png"/> Share</Button></Col>
            </Row>
          </div>

          <div
            style={{
              backgroundColor: "rgb(46,46,46)",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
              color: "white"
            }}
          >
            <Row>
              <Col md={1}>
                <img
                  src="assets/person.png"
                  style={{
                    borderRadius: "50px",
                    width: "100%",
                    marginRight: "10%",
                  }}
                  alt="somewhere"
                />
              </Col>
              <Col md={8}>
                <h3>Burna Boy</h3>
              </Col>
              <Col>
                <Button variant="dark" style={{ marginLeft: "25%" }}>
                  connect
                </Button>
              </Col>
            </Row>
            {/* <hr /> */}
            <p className="lead">
              Some test content img elements must have an alt prop, either with
              meaningful text, or an empty string for decorative images{" "}
            </p>
            <p className="lead">
              an alt prop, either with meaningful text, or{" "}
            </p>
            <img
              src="assets/img1.jpg"
              alt="an2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
             <hr/>
            <Row>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/like.png"/>  Like</Button></Col>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/share.png"/> Share</Button></Col>
            </Row>
          </div>

          <div
            style={{
              backgroundColor: "rgb(46,46,46)",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
              color: "white"
            }}
          >
            <Row>
              <Col md={1}>
                <img
                  src="assets/person.png"
                  style={{
                    borderRadius: "50px",
                    width: "100%",
                    marginRight: "10%",
                  }}
                  alt="somewhere1"
                />
              </Col>
              <Col md={8}>
                <h3>Kabza De Small</h3>
              </Col>
              <Col>
                <Button variant="dark" style={{ marginLeft: "25%" }}>
                  connect
                </Button>
              </Col>
            </Row>
            {/* <hr /> */}
            <p className="lead">
              Some test content img elements must have an alt prop, either with
              meaningful text, or an empty string for decorative images{" "}
            </p>
            <p className="lead">
              an alt prop, either with meaningful text, or{" "}
            </p>
            <img
              src="assets/R.jpg"
              alt="an"
              style={{ width: "100%", borderRadius: "10px" }}
            />
             <hr/>
            <Row>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/like.png"/>  Like</Button></Col>
                <Col><Button variant="outline-light" size="sm" style={{width:"100%", border:"none"}}><img src="assets/share.png"/> Share</Button></Col>
            </Row>
          </div>
        </Col>
        <Col>
          {/* <Button variant="dark" style={{ width: "30%" }}>
            Chat
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
