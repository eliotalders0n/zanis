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
  Button,
  Modal,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import firebase from "../../firebase";
import { Skeleton } from "@mui/material";
import useGetMinistries from "../hooks/useGetMinistries";
import DOMPurify from 'dompurify';

function Landing(props) {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]); // State to hold filtered articles
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term
  // const ministries = useGetMinistries().docs;

  useEffect(() => {
    // Load articles from Firestore on component mount
    const unsubscribeArticles = firebase
      .firestore()
      .collection("Articles")
      .where("status", "==", "approved")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const articles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLoading(false);
        setArticles(articles);
        setFilteredArticles(articles);
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

  // Function to filter articles based on ministry
  const filterArticlesByMinistry = (ministryId) => {
    if (ministryId === "all") {
      setFilteredArticles(articles); // If ministry is "all", show all articles
    } else {
      const filtered = articles.filter(
        (article) => article.ministry === ministryId
      );
      console.log("filter : " + filtered);
      setFilteredArticles(filtered);
    }
  };

  // Function to handle live search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    setFilteredArticles(filtered);
  };

  // Function to reset search and ministry filter
  const resetFilters = () => {
    setSearchTerm("");
    setFilteredArticles(articles);
  };

  const Ministries = useGetMinistries().docs;

  const [showShare, setShowShare] = useState(false);

  const handleShareClose = () => setShowShare(false);
  const handleShareShow = () => setShowShare(true);

  const sanitizeHTML = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    };
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "12vh 3vh 12vh 3vh",
      }}
    >
      <Stack>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            style={{ backgroundColor: "", color: "black", border: "none" }}
            onChange={handleSearch}
          />
          <InputGroup.Text
            id="basic-addon2"
            style={{
              backgroundColor: "",
              color: "white",
              borderRightColor: "black",
              borderRight: "1px solid",
            }}
          >
            <img
              src="assets/search.png"
              style={{ width: "30px" }}
              alt="search"
            />
          </InputGroup.Text>
        </InputGroup>
        <Button variant="secondary" size="sm" onClick={resetFilters}>
          Reset Filters
        </Button>
      </Stack>
      <br />
      <Stack direction="horizontal" gap={3}>
        <h2>Explore</h2>

        {/* <Nav.Link
          as={Link}
          // to="/ministries"
          style={{ color: "grey" }}
          onClick={handleShareShow}
          className="p-2 ms-auto"
        >
          See more
        </Nav.Link> */}
      </Stack>
      <br />
      <Stack
        direction="horizontal"
        gap={3}
        style={{ overflowX: "auto", fontSize: "12px" }}
      >
        {Ministries.map((ministry) => (
          <Stack
            key={ministry.id}
            onClick={() => filterArticlesByMinistry(ministry.name)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={ministry.img}
              alt=""
              style={{ width: "6vh" }}
              roundedCircle
            />
            {ministry.name}
          </Stack>
        ))}
      </Stack>
      <br />
      <Stack direction="horizontal" gap={3}>
        <h2>Trending News</h2>
        <p className="p-2 ms-auto"></p>
      </Stack>
      <Row>
        {loading ? ( // Render Skeleton while loading is true
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <br />
            {/* For other variants, adjust the size with `width` and `height` */}
            <br />
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey" }}
              width={320}
              height={218}
            />
            <br />
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey" }}
              width={320}
              height={60}
            />
            <br />

            <Skeleton
              variant="circular"
              sx={{ bgcolor: "grey" }}
              width={40}
              height={40}
            />
            <br />
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey" }}
              width={320}
              height={118}
            />
            <br />
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey" }}
              width={320}
              height={60}
            />
          </Stack>
        ) : filteredArticles.length === 0 ? (
          <>
            <br />
            <h3 className="display-3 text-center">
              {" "}
              <b>Oops!</b> <br />
              No news yet for that ministry.
            </h3>
            <p className="lead text-center">Try again later</p>
          </>
        ) : (
          filteredArticles
            .filter((article) =>
              article.title.toLowerCase().includes(searchTerm)
            )
            .map((article) => (
              <Col
                style={{ height: " 45vh", marginBottom: "10%", padding: "0 0" }}
              >
                <Link
                  to={"/story/" + article.id}
                  state={{ data: article }}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
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
                        <Badge bg="danger">
                          {/* {authors[article.author]?.ministry} */}
                          {article.ministry}
                        </Badge>
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
                        ?  (
                          <div dangerouslySetInnerHTML={sanitizeHTML(`${article.content.substring(0, 100)}...`)} />
                        ) : (
                          <div dangerouslySetInnerHTML={sanitizeHTML(article.content)} />
                        )}
                    </Card.Text>
                    <Stack
                      direction="horizontal"
                      gap={2}
                      style={{ color: "white" }}
                    >
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
                </Link>
              </Col>
            ))
        )}
      </Row>
      <Modal show={showShare} onHide={handleShareClose}>
        <Modal.Body
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Stack gap={4} style={{padding:"10px 20px"}}>
          {Ministries.map((ministry) => (
            <Badge bg="success" key={ministry.id}
            onClick={() => filterArticlesByMinistry(ministry.name)}>Ministry of {ministry.name}</Badge>
      ))}
      </Stack>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Landing;
