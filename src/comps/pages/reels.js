import React from 'react';
import { Card, Badge, Stack, Image, Container, Row, Col } from 'react-bootstrap';

const ReelCard = ({ title, date, postedBy, imageUrl }) => {
    return (
        <Container fluid style={{backgroundColor: "black", height: "auto", padding: "12vh 1vh 12vh 1vh",}}>
                <Card flex={{ base: 'auto', md: 1 }} style={{ height: "85vh", maxWidth: "450px", minWidth: "auto", border: "none", backgroundColor: "black",  paddingBottom: "7vh" }}>
                    <Card.Body style={{ backgroundImage: `url("assets/news/chef.jpg")`, color: "white", backgroundSize: "cover", borderRadius: "18px" }}>
                        <Card.Title><b>{title}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><Badge bg="danger">Sports</Badge></Card.Subtitle>
                    </Card.Body>
                    <Card.Text style={{ backgroundColor: "black", color: "white", fontSize: "14px", margin: "2px 2px" }}>
                    Chef187 Nominated for Grammy Finals
                    </Card.Text>
                    <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
                        {/* You can customize this section based on your needs */}
                        <Image src="assets/ministries/labour.png" alt="" style={{ width: "3vh" }} roundedCircle />Jonathen Mutale
                    </Stack>
                    <Card.Text style={{ backgroundColor: "black", color: "white", fontSize: "10px", margin: "2px 3px" }}>
                        {date}   .   2.4 Millions Readers
                    </Card.Text>
                </Card>
                <Card flex={{ base: 'auto', md: 1 }} style={{ height: "85vh", maxWidth: "450px", minWidth: "auto", border: "none", backgroundColor: "black",  paddingBottom: "7vh" }}>
                    <Card.Body style={{ backgroundImage: `url("assets/news/russia.jpg")`, color: "white", backgroundSize: "cover", borderRadius: "18px" }}>
                        <Card.Title><b>{title}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><Badge bg="danger">Finance</Badge></Card.Subtitle>
                    </Card.Body>
                    <Card.Text style={{ backgroundColor: "black", color: "white", fontSize: "14px", margin: "5px 5px" }}>
                        Castle United scores winning goal during Cosafa Cup Finals
                    </Card.Text>
                    <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
                        {/* You can customize this section based on your needs */}
                        <Image src="assets/ministries/labour.png" alt="" style={{ width: "3vh" }} roundedCircle />Matthew Mwanza
                    </Stack>
                    <Card.Text style={{ backgroundColor: "black", color: "white", fontSize: "10px", margin: "2px 5px" }}>
                        {date}   .   2.4 Millions Readers
                    </Card.Text>
                </Card>
        </Container>
    );
}

export default ReelCard;
