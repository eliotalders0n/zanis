import React, { useState } from "react";
import { Grid, Button, Stack, Container, Typography, Box } from "@mui/material";
import { useTheme } from "../template/themeContext";
import { Link } from "react-router-dom";
import useGetMinistries from "../hooks/useGetMinistries";
import { Image } from "react-bootstrap";

const CategoryComponent = () => {
  const Documents = useGetMinistries().docs;

  const { theme } = useTheme();

  return (
    <Container
      fluid
      className="reels-container"
      style={{
        backgroundColor: theme === "light" ? "white" : "#111111",
        color: theme === "light" ? "#111111" : "white",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Roboto Condensed",
          fontStyle: "normal",
          textAlign: "center",
        }}
      >
        Podcasts
      </h2>

      <Stack>
        {Documents.map((resource) => (
          <Link
            to={"/podcastList/" + resource.id}
            state={{ data: resource }}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                key={resource.id}
                style={{
                  backgroundColor: theme === "light" ? "white" : "#111111",
                  color: theme === "light" ? "#111111" : "white",
                  boxShadow: "0px 10px 10px rgba(0,0,0,0.9)",
                  width: "100%",
                  marginBottom: "2vh",
                  padding: "15px",
                }}
              >
                <Grid item xs={2}>
                  {/* <img style={{ width: "100%" }} src={resource.img} /> */}
                  <Image
                    src={resource.img}
                    alt=""
                    style={{ width: "100%" }}
                    roundedCircle
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  style={{
                    backgroundColor: theme === "light" ? "white" : "#111111",
                    color: theme === "light" ? "#111111" : "white",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Roboto Condensed",
                      fontStyle: "normal",
                      textAlign: "left",
                      backgroundColor: theme === "light" ? "white" : "#111111",
                      color: theme === "light" ? "#111111" : "white",
                    }}
                  >
                    {resource.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    backgroundColor: theme === "light" ? "white" : "#111111",
                    color: theme === "light" ? "#111111" : "white",
                  }}
                >
                  <Button
                    variant="contained"
                    //   onClick={() => handlePreview(resource.id, resource.file)}s
                    style={{ backgroundColor: "#2ba84a", color: "white" }}
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default CategoryComponent;
