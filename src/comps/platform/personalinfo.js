import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function Personalinfo(props) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="email" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="last name" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" placeholder="country" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>State/Province</Form.Label>
                      <Form.Control type="text" placeholder="state/province" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control placeholder="+1 340 216 189" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Upload Resume</Form.Label>
                    <Form.Control type="file" size="sm" />
                  </Form.Group>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

        </Form>
    );
}

export default Personalinfo;