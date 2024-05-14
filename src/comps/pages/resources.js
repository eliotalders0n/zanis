import React, { useState } from "react";
import { Card, Stack, Container } from "react-bootstrap";
import { Grid, Button, Divider, Typography, Modal, Box, Paper } from '@mui/material'
import useGetResources from "../hooks/useGetResources";
import { useTheme } from "../template/themeContext";

const Resources = () => {
  const Documents = useGetResources().docs;
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handlePreview = (documentId) => {
    const document = Documents.find((doc) => doc.id === documentId);
    setSelectedDocument(document);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const { theme } = useTheme();

  return (
    <Container
      fluid
      className="reels-container"
      style={{
        backgroundColor: theme === "light" ? "white" : "#111111",
        color: theme === "light" ? "#111111" : "white",
        minHeight: "100vh",
        padding: "10vh 1vh 10vh 1vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Roboto Condensed",
          fontStyle: "normal",
          textAlign: "center",
        }}
      >
        Resources
      </h2>

      <Stack gap={4} style={{ padding: "10px 20px" }}>
        {Documents.map((resource) => (
          <Card
            key={resource.id}
            style={{
              backgroundColor: theme === "light" ? "white" : "#111111",
              color: theme === "light" ? "#111111" : "white",
              boxShadow: "0px 10px 10px rgba(0,0,0,0.9)",
              padding: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "Roboto Condensed",
                fontStyle: "normal",
                textAlign: "left",
                backgroundColor: theme === "light" ? "white" : "#111111",
                color: theme === "light" ? "#111111" : "white",
              }}
            >
              <b>{resource.name}</b> <br />
              <br /> {resource.ministry} <br /> {resource.type} <br />{" "}
              {new Date(
                resource.createdAt.seconds * 1000 +
                  resource.createdAt.nanoseconds / 1000000
              ).toLocaleDateString()}
            </p>
            <Button
              variant="contained"
              onClick={() => handlePreview(resource.id, resource.file)}
              style={{ backgroundColor: "#2ba84a", color: "white" }}
            >
              View
            </Button>
          </Card>
        ))}
      </Stack>
       <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="document-preview"
        aria-describedby="document-preview-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Paper
            elevation={5}
            style={{
              padding: "20px",
              width: "90vw",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Document Preview
            </Typography>
            {/* Render document preview here */}
            {selectedDocument && (
              <embed
                src={selectedDocument.url}
                type="application/pdf"
                width="100%"
                height="500px"
              />
            )}
          </Paper>
        </Box>
      </Modal>
    </Container>
  );
};

export default Resources;
