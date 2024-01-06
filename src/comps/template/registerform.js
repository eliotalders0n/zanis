import React from 'react';
import {
    Row,
    Col,
    InputGroup,
    Card,
    Form,
    Container,
    Button,
    ListGroup,
  } from "react-bootstrap";

function registerform(props) {
    return (
        <div>
            <form>
                  <ListGroup.Item style={{ border: "none" }}>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        Email
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="email"
                        aria-describedby="inputGroup-sizing-sm"
                        type="email"
                      />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        Password
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="password"
                        aria-describedby="inputGroup-sizing-sm"
                        type="password"
                      />
                    </InputGroup>
                    <Row>
                      <Col>
                        <Link to="/profile1">
                          <Button variant="dark" style={{ width: "100%" }}>
                            Login
                          </Button>
                        </Link>
                      </Col>
                      <Link to="/profile1">
                        <br />
                        <Button variant="outline-dark" onClick={handleShowReg}>
                          Not a member yet? Signup
                        </Button>
                      </Link>
                    </Row>
                  </ListGroup.Item>
                </form>
        </div>
    );
}

export default registerform;