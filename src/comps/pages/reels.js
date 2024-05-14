import React, { useState, useEffect } from "react";
import { Card, Badge, Stack, Container, Button } from "react-bootstrap";
import { Skeleton, Typography } from "@mui/material";
import "./reels.css";
import { useTheme } from "../template/themeContext";
import useGetReels from "../hooks/useGetReels";
import firebase from "../../firebase";

const ReelCard = () => {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState({});
  const Reel = useGetReels().docs;

  useEffect(() => {
    const unsubscribeAuthors = firebase
      .firestore()
      .collection("Users")
      .onSnapshot((snapshot) => {
        const authorsData = {};
        snapshot.docs.forEach((doc) => {
          authorsData[doc.id] = doc.data();
        });
        setAuthors(authorsData);
        setLoading(false);
      });

    return () => {
      unsubscribeAuthors();
    };
  }, []);

  const { theme } = useTheme();

  // Function to handle liking an article
  const handleLike = (articleId) => {
    // Implement logic to update likes in database or state
  };

  // Function to handle disliking an article
  const handleDislike = (articleId) => {
    // Implement logic to update dislikes in database or state
  };

  // Function to handle commenting on an article
  const handleComment = (articleId) => {
    // Implement logic to open a comment modal or navigate to a comment page
  };

  return (
    <Container
      fluid
      className="reels-container"
      style={{
        backgroundColor: theme === "light" ? "white" : "#111111",
        color: theme === "light" ? "#111111" : "white",
        minHeight: "100vh",
        padding: "10vh 3vh 10vh 3vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Roboto Condensed",
          fontStyle: "normal",
          marginLeft: "7vh",
          textAlign: "center",
        }}
      >
        Videos
      </h2>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton
            variant="rounded"
            sx={{ fontSize: "3rem", bgcolor: "grey" }}
            style={{ width: "100%", height: "60vh" }}
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
            style={{ width: "100%", height: "5vh" }}
          />
        </Stack>
      ) : Reel.length === 0 ? (
        <>
          <br />
          <h3 className="display-3 text-center">
            {" "}
            <b>Oops!</b> <br />
            No news yet.
          </h3>
          <p className="lead text-center">Try again later</p>
        </>
      ) : (
        Reel.map((article) => (
          <Card
            key={article.id}
            className="reels-card"
            style={{
              backgroundColor: theme === "light" ? "white" : "#111111",
              color: theme === "light" ? "#111111" : "white",
              boxShadow: "0px 10px 10px rgba(0,0,0,0.9)",
              paddingBottom: "10px",
            }}
          >
            <Card.Body
              className="reels-card-body"
              style={{
                backgroundColor: theme === "light" ? "white" : "#111111",
                color: theme === "light" ? "#111111" : "white",
              }}
            >
              <Card.Title
                style={{
                  backgroundColor: theme === "light" ? "white" : "#111111",
                  color: theme === "light" ? "#111111" : "white",
                }}
              ></Card.Title>
              <video
                src={article.imagesUrls}
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                controls
              />
            </Card.Body>
            <Card.Text
              className="reels-card-text"
              style={{
                backgroundColor: theme === "light" ? "white" : "#111111",
                color: theme === "light" ? "#111111" : "white",
              }}
            >
              {article.title} <br />
              <Badge bg="danger">{article.ministry}</Badge>
            </Card.Text>
            <Card.Text
              className="reels-card-text"
              style={{
                backgroundColor: theme === "light" ? "white" : "#111111",
                color: theme === "light" ? "#111111" : "white",
              }}
            >
              <Stack
                direction="horizontal"
                gap={2}
                style={{
                  backgroundColor: theme === "light" ? "white" : "#111111",
                  color: theme === "light" ? "#111111" : "white",
                }}
              >
                <img
                  src={authors[article.author]?.photoURL}
                  alt=""
                  style={{ width: "3vh", height: "3vh" }}
                  roundedCircle
                />
                {authors[article.author]?.firstName}{" "}
                {authors[article.author]?.lastName}
              </Stack>
            </Card.Text>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ReelCard;
