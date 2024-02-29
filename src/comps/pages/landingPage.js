import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Stack,
  Badge,
  Card,
  Container,
  InputGroup,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { Skeleton } from "@mui/material";
import firebase from "../../firebase";
import DOMPurify from "dompurify";
import { useTheme } from "../template/themeContext";
import useGetMinistries from "../hooks/useGetMinistries";

function Landing() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();
  const Ministries = useGetMinistries().docs;
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesSnapshot = await firebase
          .firestore()
          .collection("Articles")
          .where("status", "==", "approved")
          .where("video", "==", false)
          .orderBy("createdAt", "desc")
          .get();

        const articlesData = articlesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
        setFilteredArticles(articlesData);

        const authorsSnapshot = await firebase
          .firestore()
          .collection("Users")
          .get();

        const authorsData = {};
        authorsSnapshot.docs.forEach((doc) => {
          authorsData[doc.id] = doc.data();
        });
        setAuthors(authorsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [articles, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilteredArticles(articles);
  };

  const filterArticlesByMinistry = (ministryId) => {
    if (ministryId === "all") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) => article.ministry === ministryId
      );
      setFilteredArticles(filtered);
    }
  };

  const handleShareClose = () => setShowShare(false);
  const handleShareShow = () => setShowShare(true);

  const sanitizeHTML = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "12vh 3vh 12vh 3vh",
      }}
    >
      {/* Search */}
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
        <Button
          size="sm"
          onClick={resetFilters}
          style={{
            width: "30%",
            marginLeft: "35%",
            backgroundColor: "rgb(30,30,30)",
            border: "none",
          }}
        >
          Reset Filters
        </Button>
      </Stack>
      <br />

      {/* Explore Ministries */}
      <Stack
        direction="horizontal"
        gap={3}
        style={{
          overflowX: "scroll",
          fontSize: "12px",
          overflowY: "hidden",
          scrollbarWidth: "thin", // Use camelCase for property names
          "&::-webkit-scrollbar": {
            width: "1px",
            backgroundColor: "#F5F5F5",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ddd",
            borderRadius: "3px",
          },
        }}
      >
        {Ministries.map((ministry) => (
          <Stack
            key={ministry.id}
            onClick={() => filterArticlesByMinistry(ministry.name)}
            style={{ cursor: "pointer", fontFamily: "Martel Sans" }}
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

      {/* Trending News */}
      <br />
      <Stack direction="horizontal" gap={3}>
        <h2 style={{ fontFamily: "Roboto Condensed", fontStyle: "normal" }}>
          Trending News
        </h2>
      </Stack>
      <br />
      {/* Articles */}
      <Row>
        {loading ? (
          // Skeletons for loading
          <Stack spacing={1}>
            <br />
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
          // No articles found
          <>
            <br />
            <h3 className="display-3 text-center">
              <b>Oops!</b> <br /> No news yet for that ministry.
            </h3>
            <p className="lead text-center">Try again later</p>
          </>
        ) : (
          // Render articles
          filteredArticles.map((article) => (
            <Col
              key={article.id}
              md={4}
              style={{
                minHeight: " 45vh",
                maxHeight: "50vh",
                marginBottom: "7%",
                padding: "0 10px",
              }}
            >
              <Link
                to={"/story/" + article.id}
                state={{ data: article }}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Card
                  style={{
                    height: "100%",
                    minWidth: "38vh",
                    border: "none",
                    backgroundColor: theme === "light" ? "white" : "black",
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  {/* Card body */}
                  <Card.Body
                    style={{
                      backgroundImage: `url("${article.imagesUrls[0]}")`,
                      backgroundColor: theme === "light" ? "white" : "black",
                      color: theme === "light" ? "black" : "white",
                      backgroundSize: "cover",
                      borderRadius: "18px",
                    }}
                  >
                    <Card.Title
                      style={{
                        backgroundColor:
                          theme === "light"
                            ? "rgba(250,250,250,0.8)"
                            : "rgba(50,50,50,0.5)",
                        color: theme === "light" ? "black" : "white",
                        borderRadius: "10px",
                        padding: "1px",
                      }}
                    >
                      <b>{article.title}</b>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <Badge bg="danger">{article.ministry}</Badge>
                    </Card.Subtitle>
                  </Card.Body>
                  <Card.Text
                    style={{
                      backgroundColor: theme === "light" ? "white" : "black",
                      color: theme === "light" ? "black" : "white",
                      fontSize: "17px",
                      margin: "5px 5px",
                    }}
                  >
                    {article.content.length > 50 ? (
                      <div
                        dangerouslySetInnerHTML={sanitizeHTML(
                          `${article.content.substring(0, 50)}...`
                        )}
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={sanitizeHTML(article.content)}
                      />
                    )}
                  </Card.Text>
                  {/* Author */}
                  <Stack
                    direction="horizontal"
                    gap={2}
                    style={{
                      backgroundColor: theme === "light" ? "white" : "black",
                      color: theme === "light" ? "black" : "white",
                    }}
                  >
                    <Image
                      src={authors[article.author]?.photoURL}
                      alt=""
                      style={{ width: "3vh", height: "3vh" }}
                      roundedCircle
                    />
                    {authors[article.author]?.firstName}{" "}
                    {authors[article.author]?.lastName}
                  </Stack>
                  {/* Date */}
                  <Card.Text
                    style={{
                      backgroundColor: theme === "light" ? "white" : "black",
                      color: theme === "light" ? "black" : "white",
                      fontSize: "10px",
                      margin: "2px 5px",
                    }}
                  >
                    {" "}
                    Posted on{" "}
                    {article.createdAt &&
                      article.createdAt.toDate().toLocaleString()}
                  </Card.Text>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>

      {/* Share Modal */}
      <Modal show={showShare} onHide={handleShareClose}>
        <Modal.Body
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <Stack gap={4} style={{ padding: "10px 20px" }}>
            {Ministries.map((ministry) => (
              <Badge
                key={ministry.id}
                bg="success"
                onClick={() => filterArticlesByMinistry(ministry.name)}
              >
                Ministry of {ministry.name}
              </Badge>
            ))}
          </Stack>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Landing;
