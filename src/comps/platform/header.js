import React from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";

function Header(props) {
  return (
    <Row style={{boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.1)", background: "linear-gradient(to bottom, rgb(126,69,196), black)", color:"white"}}>
      <Col>
        <Nav
          className="justify-content-start"
          activeKey="/home"
          style={{  padding: "20px 10px" }}
        >
          <Nav.Item>
            <Nav.Link href="/" style={{color:"white"}}><b>OBSIDI</b></Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <Form.Control
              placeholder="Search for Jobs"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Nav.Item>
        </Nav>
      </Col>

      <Col>
        <Nav
          className="justify-content-center"
          activeKey="/"
          style={{ padding: "10px 10px" }}
        >
          <Nav.Item>
            <Nav.Link href="/"><img src="assets/mug.png" alt="mug" style={{width:"40px", backgroundColor: "rgb(180,200,180)", borderRadius:"50px"}}/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><img src="assets/work.png" alt="work" style={{width:"40px", backgroundColor: "rgb(200,180,180)", borderRadius:"50px"}}/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><img src="assets/community.png" alt="community"style={{width:"40px", backgroundColor: "rgb(180,180,230)", borderRadius:"50px"}}/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-3"><img src="assets/alarm.png" alt="alarm" style={{width:"40px", backgroundColor: "rgb(180,100,180)", borderRadius:"50px"}}/></Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>

      <Col>
        <Nav
          className="justify-content-end"
          activeKey="/home"
          style={{ padding: "20px 10px" }}
        >
          <Nav.Item href="/">
            <Button variant="outline-light">Logout</Button>
          </Nav.Item>
        </Nav>
      </Col>

    </Row>
  );
}

export default Header;
