import React from "react";
import { Modal, Box } from "@mui/material";
import { Document, Page } from "react-pdf";

const DocumentModal = ({ open, onClose, document }) => {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log("doc is at : " + document);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: "10px",
        }}
      >
        {document && (
          <Document
            file={document}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page style={{padding: "100px"}} key={`page_${index + 1}`} pageNumber={index + 1}/>
            ))}
          </Document>
        )}
      </Box>
    </Modal>
  );
};

export default DocumentModal;
