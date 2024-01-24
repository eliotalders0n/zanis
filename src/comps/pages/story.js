import React from "react";
import { Card, Stack, Image, Button, Form, InputGroup, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import {
    TwitterShareButton,
    WhatsappShareButton,
    FacebookShareButton,
    TelegramShareButton,
  } from "react-share";

const Story = ({}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [showInputBox, setShowInputBox] = useState(false);

  const handleChatIconClick = () => {
    setShowInputBox(!showInputBox);
  };

  const [showShare, setShowShare] = useState(false);

  const handleShareClose = () => setShowShare(false);
  const handleShareShow = () => setShowShare(true);

  const story =
    "In a bustling city, the Labor and Social Security Minister stood behind the podium, his voice echoing through the crowded conference hall. The air was charged with anticipation as attendees leaned forward, eager to hear his words. With a sense of purpose, he began to address the challenges and aspirations of the workforce. The minister spoke passionately about the importance of creating a fair and inclusive work environment, one where every citizen could contribute and thrive. He outlined ambitious plans to strengthen labor laws, ensuring better protection for workers and fair wages. His vision extended beyond the economic landscape, reaching into the social fabric, aiming to uplift communities through meaningful employment opportunities. As he spoke, the minister emphasized the need for collaboration between the government, businesses, and labor unions. He envisioned a partnership that would drive innovation, foster job creation, and ultimately lead to a more robust and resilient society. The audience absorbed every word, inspired by the minister's commitment to social justice and the well-being of the nation. The message reverberated far beyond the conference hall, sparking conversations and actions that would shape the future of labor and social security policies. The minister's words became a rallying cry for change, resonating with workers, employers, and advocates alike. Through his impassioned speech, he had ignited a collective determination to build a society where labor was not just a means of survival but a pathway to prosperity and fulfillment. As the minister concluded his address, the room erupted in applause, a symbol of hope and unity. His words lingered in the hearts of the people, prompting reflection on the shared responsibility of creating a better future for all. The journey towards a more just and equitable society had begun, fueled by the resounding voice of the Labor and Social Security Minister.";

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "auto",
        padding: "12vh 0",
      }}
    >
      <div>
        <Stack style={{ color: "white", margin: "1vh 3vh" }}>
          <h2 className="display-5">
            Labour and social security minister has spoken
          </h2>
          <Stack direction="horizontal">
            <Image
              src="assets/ministries/labour.png"
              alt=""
              style={{ width: "3vh" }}
              roundedCircle
            />
            Mwape Mpendulo Jnr
          </Stack>
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            <span style={{ fontSize: "12px" }}>Posted 3 hours ago</span>
            <br />
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <br />
          <Image src="assets/news/labour.jpg" alt="labour" rounded />
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              margin: "1px 5px",
            }}
          >
            <br />
            <div>
              <p>
                {expanded ? story : story.slice(0, 200)}
                {story.length > 200 && (
                  <Button
                    size="sm"
                    style={{ marginLeft: "3vh" }}
                    variant="outline-primary"
                    onClick={handleClick}
                  >
                    {expanded ? "Click to Collapse" : "Click to Expand"}
                  </Button>
                )}
              </p>
            </div>
          </Card.Text>
          <hr />
          <Stack
            direction="horizontal"
            gap={5}
            className="justify-content-center"
          >
            <i className="bi bi-share" onClick={handleShareShow}></i>
            <i
              className="bi bi-chat-left-text"
              style={{ cursor: "pointer" }}
              onClick={handleChatIconClick}
            ></i>
            <i className="bi bi-hand-thumbs-up"></i>
          </Stack>
          {showInputBox && (
            <InputGroup className="mb-3 my-3">
              <Form.Control
                aria-label="user comment"
                type="text"
                placeholder="your comment"
                autoFocus
                onBlur={() => setShowInputBox(false)}
              />
              <Button variant="outline-secondary" id="button-addon2">
                Comment
              </Button>
            </InputGroup>
          )}
        </Stack>
      </div>
      <Modal show={showShare} onHide={handleShareClose} >
        <Modal.Body style={{backgroundColor: "black", color:"white"}}>
          <h4 className="display-6 text-center">
            Share this with your social Community!
            <br />
            <br />
            <Row>
              <Col>
                <FacebookShareButton
                  url="https://zanis-pro.web.app"
                  quote="ZANIS. Come check us out at merge every Sunday 1pm to 2:30pm!"
                >
                  <i className="bi bi-facebook"></i>
                </FacebookShareButton>
              </Col>
              <Col>
                <WhatsappShareButton
                  url="https://zanis-pro.web.app"
                  title="ZANIS "
                  separator=" Come check us out at merge every Sunday 1pm to 2:30pm! "
                >
                  <i className="bi bi-whatsapp"></i>
                </WhatsappShareButton>
              </Col>
              <Col>
                <TwitterShareButton
                  title="ZANIS"
                  url={"https://zanis-pro.web.app"}
                  via={"Come check us out at merge every Sunday 1pm to 2:30pm!"}
                >
                  <i className="bi bi-twitter"></i>
                </TwitterShareButton>
              </Col>
              <Col>
                <TelegramShareButton
                  url="https://zanis-pro.web.app"
                  title="ZANIS"
                  description="Come check us out at merge every Sunday 1pm to 2:30pm!"
                >
                  <i className="bi bi-telegram"></i>
                </TelegramShareButton>
              </Col>
            </Row>
          </h4>
          <br />
          <br />
          <p className="lead">or copy link</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="https://zanis-pro.web.applink"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-success"
              id="button-addon2"
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://zanis-pro.web.applink"
                );
              }}
            >
              Copy
            </Button>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", color:"white"}}>
          <Button variant="dark" onClick={handleShareClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Story;
