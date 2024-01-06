import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function PreferredWorkplace(props) {
    return (
        <Form>
             <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control placeholder="email" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" placeholder="first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="text" placeholder="last name" />
                    </Form.Group>
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="is this your current role?" />
                  </Form.Group>
        </Form>
    );
}

export default PreferredWorkplace;