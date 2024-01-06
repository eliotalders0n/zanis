import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Nav,
  Card,
  ProgressBar,
  Badge,
} from "react-bootstrap";
import Header from "./header";
import Sidepane from "./sidepane";
// import { Link } from "react-router-dom";
import Personalinfo from "./personalinfo";
import SkillsListForm from "../pages/SkillListForm";
import PreferredWorkplace from "./preferredWorkplace";
import Education from "./education";

function Mypage(props) {
  const now = 60;
  return (
    <Container fluid style={{ backgroundColor: "rgb(240,240,240)" }}>
      <Header />
      <Nav
        className="justify-content-center"
        activeKey="/home"
        style={{ backgroundColor: "black" }}
      >
        <Nav.Item>
          <Nav.Link href="/home">
            <Button variant="dark">My Page</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Button variant="dark">My Posts</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Button variant="dark">My Settings</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col md={2}>
          <Sidepane />
        </Col>
        <Col md={2} style={{ backgroundColor: "rgba(190,190,190,0.2)", height: "100%", marginTop: "30px", borderRadius: "10px" }}>
            <br/><br/>
<p className="lead" style={{fontSize: "28px"}}>Suggested Connections</p>
            <br/>  
          <Card style={{  }}>
            <Card.Body>
              <Card.Title>Hewlett Packard</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Lead Designer
              </Card.Subtitle>
              <Card.Text>
              <Badge bg="dark">Remote</Badge>{" "}
              <Badge bg="dark">$400/hour</Badge>{" "}
              <Badge bg="dark">San Diego</Badge><br/>
              </Card.Text>
              <Button variant="outline-dark">View Job</Button>
            </Card.Body>
          </Card>
          <br/>
          <Card style={{ }}>
            <Card.Body>
              <Card.Title>Toptal Tech</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Cyber Security Analyst
              </Card.Subtitle>
              <Card.Text>
              <Badge bg="dark">On-site</Badge>{" "}
              <Badge bg="dark">$600/hour</Badge>{" "}
              <Badge bg="dark">New York</Badge>
              </Card.Text>
             <Button variant="outline-dark">View Job</Button>
            </Card.Body>
          </Card>
          <br/>
          <Card style={{  }}>
            <Card.Body>
              <Card.Title>Engen Corp</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Sales Assistant
              </Card.Subtitle>
              <Card.Text>
              <Badge bg="dark">Full-Time</Badge>{" "}
              <Badge bg="dark">$1200/hour</Badge>{" "}
              <Badge bg="dark">Kampala</Badge>
              </Card.Text>
              <Button variant="outline-dark">View Job</Button>
            </Card.Body>
          </Card>
          <br/>
          <br/>
        </Col>
        <Col style={{ backgroundColor: "rgba(190,190,190,0.2)", margin: "30px 10px", borderRadius: "10px" }}>
          <div>
            <br />
            <h1 className="display-5">My Page</h1>
            <br />
            <Card body>
              <h2 className="display-6">John Doe</h2>
              <p className="lead">
                One more step until your profile is complete.
              </p>
              <p>
                Highlight your top skills to be discovered in employer searches.
              </p>
              <Row>
                <Col>
                  <Button variant="dark">Edit Skills</Button>
                </Col>
                <Col md={4}>
                  <ProgressBar animated now={now} label={`${now}%`} />
                </Col>
              </Row>
            </Card>

            <Row>
              <Col
                md={3}
                style={{ backgroundColor: "" }}
                className="justify-content-center"
              >
                {" "}
                <Image
                  src="assets/spiderman.jpg"
                  style={{
                    width: "120px",
                    height: "130px",
                    margin: "20px 30%",
                    borderRadius: "100px",
                  }}
                  roundedCircle
                />
                <Button size="sm" variant="dark" style={{ marginLeft: "25%" }}>
                  Change
                </Button>{" "}
                <Button size="sm" variant="outline-dark">Remove</Button>
              </Col>
              <Col md={8}>
                <br />
                <p className="display-6">Personal Info</p>
                <br />
                <Personalinfo />
                <hr />
                <br />
                <SkillsListForm />
                <br />
                <p className="display-6">Work Experience</p>
                <PreferredWorkplace />
                <hr />
                <br />
                <p className="display-6">Education</p>
                <Education />
                <br />
                <br />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Mypage;
