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
  InputGroup,
  Form,
} from "react-bootstrap";
import {useState, useEffect} from 'react';
import firebase from "../../firebase";

function Landing(props) {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    // Load articles from Firestore on component mount
    const unsubscribeArticles = firebase
      .firestore()
      .collection("Articles")
      .where('status','==','approved')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const articles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articles);
      });

    // Load authors from Firestore
    const unsubscribeAuthors = firebase
      .firestore()
      .collection("Users")
      .onSnapshot((snapshot) => {
        const authorsData = {};
        snapshot.docs.forEach((doc) => {
          authorsData[doc.id] = doc.data();
        });
        setAuthors(authorsData);
      });

    return () => {
      unsubscribeArticles();
      unsubscribeAuthors();
    };
  }, []);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "12vh 3vh 12vh 3vh",
      }}
    >
      <Stack>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            style={{ backgroundColor: "", color: "white", border: "none" }}
          />
          <InputGroup.Text
            id="basic-addon2"
            style={{
              backgroundColor: "",
              color: "white",
              borderRightColor: "black",
              borderRight: "1px solid"
            }}
          >
            <img
              src="assets/search.png"
              style={{ width: "30px" }}
              alt="search"
            />
          </InputGroup.Text>
        </InputGroup>
      </Stack>
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
      <br />
      <Stack
        direction="horizontal"
        gap={3}
        style={{ overflowX: "auto", fontSize: "12px" }}
      >
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
      </Stack>
      <br />
      <Stack direction="horizontal" gap={3}>
        <h2>Trending News</h2>
        <p className="p-2 ms-auto"></p>
      </Stack>
      <Row>
        {articles.map((article) => (
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
                  backgroundImage: `url("${article.imagesUrls[0]}")`,
                  color: "white",
                  backgroundSize: "cover",
                  borderRadius: "18px",
                }}
              >
                {console.log(article.imagesUrls[0])}
                <Card.Title
                  style={{
                    backgroundColor: "rgba(40,40,40,0.3)",
                    borderRadius: "10px",
                    padding: "1px",
                  }}
                >
                  <b>{article.title}</b>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Badge bg="danger">{authors[article.author]?.ministry}</Badge>
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
                {article.content.length > 100
                    ? `${article.content.substring(0, 100)}...`
                    : article.content}
              </Card.Text>
              <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
                <Image
                  src="assets/ministries/labour.png"
                  alt=""
                  style={{ width: "3vh" }}
                  roundedCircle
                />
                {authors[article.author]?.firstName}{" "}
                  {authors[article.author]?.lastName}
              </Stack>
              <Card.Text
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "10px",
                  margin: "2px 5px",
                }}
              >
                {article.createdAt &&
                    article.createdAt.toDate().toLocaleString()}
              </Card.Text>
            </Card>
          </Col>
        ))}

        </Row>
    </Container>
  );
}

export default Landing;
