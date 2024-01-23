import React from "react";
// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Stack,
  Badge,
  Card,
  Container,
  Nav,
} from "react-bootstrap";

function Landing(props) {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "12vh",
        paddingBottom: "12vh",
      }}
    >
      {/* <Stack>
                    <div>
                        <Image src="assets/center1.jpeg" style={{ borderRadius: "30px", width: "40vh", margin: "2vh 3vh" }} alt="center cards" />
                    </div>
                </Stack> */}
      <br />
      <Stack direction="horizontal" gap={3}>
        <h2>Explore</h2>
  
        <Nav.Link
          as={Link}
          to="/ministries"
          style={{ color: "grey" }}
          onClick={() => navigate("/ministries")}
          className="p-2 ms-auto"
        >
          See more
        </Nav.Link>
        
      </Stack>
<br/>
      <Stack direction="horizontal" gap={3} style={{ overflowX: "auto", fontSize: "12px"}}>
        <Stack>
          <Image
            src="assets/ministries/coin.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Finance
          {/* Finance */}
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/health.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Health
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/Agric.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Agriculture
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/Energy.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Energy
        </Stack>
        {/* <Stack><Image src="assets/ministries/home.png" alt="" style={{ width: "6vh" }} roundedCircle />Home Affairs</Stack> */}
        <Stack>
          <Image
            src="assets/ministries/Tour.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Tourism
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/lands.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          lands
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/Justice.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Justice
        </Stack>
        <Stack>
          <Image
            src="assets/ministries/education.png"
            alt=""
            style={{ width: "6vh" }}
            roundedCircle
          />
          Educational
        </Stack>
        {/* <Stack><Image src="assets/ministries/youth.png" alt="" style={{ width: "6vh" }} roundedCircle />Youth and sports</Stack>
                    <Stack><Image src="assets/ministries/Government.png" alt="" style={{ width: "6vh" }} roundedCircle />Local Government</Stack>
                    <Stack><Image src="assets/ministries/Science.png" alt="" style={{ width: "6vh" }} roundedCircle />Technology and science</Stack>
                    <Stack><Image src="assets/ministries/urban.png" alt="" style={{ width: "6vh" }} roundedCircle />infrastructure and urban development</Stack>
                    <Stack><Image src="assets/ministries/Transport.png" alt="" style={{ width: "6vh" }} roundedCircle />transport and logistics</Stack>
                    <Stack><Image src="assets/ministries/coin.png" alt="" style={{ width: "6vh" }} roundedCircle />small and medium enterprise development</Stack>
                    <Stack><Image src="assets/ministries/IT.png" alt="" style={{ width: "6vh" }} roundedCircle />Information and Broadcasting Services</Stack>
                    <Stack><Image src="assets/ministries/Mining.png" alt="" style={{ width: "6vh" }} roundedCircle />Mines and Minerals Development</Stack>
                    <Stack><Image src="assets/ministries/Economy.png" alt="" style={{ width: "6vh" }} roundedCircle />green economy and development</Stack>
                    <Stack><Image src="assets/ministries/Water.png" alt="" style={{ width: "6vh" }} roundedCircle />water development and sanitation</Stack>
                    <Stack><Image src="assets/ministries/labour.png" alt="" style={{ width: "6vh" }} roundedCircle />Labour and social security</Stack> */}
      </Stack>
      <br/>
      <Stack direction="horizontal" gap={3}>
        <h2>Trending News</h2>
        <p className="p-2 ms-auto"></p>
      </Stack>
      <Row>
        <Col style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}
            onClick={() => navigate("/story")}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}

            onClick={() => navigate("/story")}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}
            onClick={() => navigate("/story")}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}
            onClick={() => navigate("/story")}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ height: "45vh", marginBottom: "10%", padding: "0 0" }}>
          <Card
            flex={{ base: "auto", md: 1 }}
            style={{
              height: "100%",
              minWidth: "38vh",
              border: "none",
              backgroundColor: "black",
            }}
          >
            <Card.Body
              style={{
                backgroundImage: 'url("assets/center1.jpeg")',
                color: "white",
                backgroundSize: "cover",
                borderRadius: "18px",
              }}
            >
              <Card.Title>
                <b>North Western soccer league about to kick off</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge bg="danger">Sports</Badge>
              </Card.Subtitle>
            </Card.Body>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                margin: "5px 5px",
              }}
            >
              Castle United scores winning goal during Cosafa Cup Finals
            </Card.Text>
            <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
              <Image
                src="assets/ministries/labour.png"
                alt=""
                style={{ width: "3vh" }}
                roundedCircle
              />
              Labour and social security
            </Stack>
            <Card.Text
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "10px",
                margin: "2px 5px",
              }}
            >
              28 November 2023 . 2.4 Millions Readers
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
