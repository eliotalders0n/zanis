import React from "react";
import { Card, Badge, Stack, Container } from "react-bootstrap";
import "./reels.css";

const ReelCard = ({ title, date, postedBy, videoUrl }) => {
  return (
    <Container fluid className="reels-container" style={{}}>
      <Card className="reels-card">
        <Card.Body className="reels-card-body">
          <Card.Title>
            <b>{title}</b>
          </Card.Title>
          <iframe style={{width: "100%", height:"80vh"}} src="https://www.youtube.com/embed/eMNY3zI-TPM?si=w0wFpM_Vrcsxhf0c&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Body>
        <Card.Text className="reels-card-text">
          Chef187 Nominated for Grammy Finals <br />
          <Badge bg="danger">Sports</Badge>
        </Card.Text>
        <Card.Text className="reels-card-text">Jonathen Mutale</Card.Text>
      </Card>

      <Card className="reels-card">
        <Card.Body className="reels-card-body">
          <Card.Title>
            <b>{title}</b>
          </Card.Title>
          <video
            src={videoUrl}
            style={{ width: "100%", height: "80vh", borderRadius: "10px" }}
            controls
          />
        </Card.Body>
        <Card.Text className="reels-card-text">
          Chef187 Nominated for Grammy Finals <br />
          <Badge bg="danger">Sports</Badge>
        </Card.Text>
        <Card.Text className="reels-card-text">Jonathen Mutale</Card.Text>
      </Card>
    </Container>
  );
};

export default ReelCard;
