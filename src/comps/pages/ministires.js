import React from "react";
import { Badge, Stack} from "react-bootstrap";
import useGetMinistries from "../hooks/useGetMinistries";

const Ministries = ({ title, date, postedBy, imageUrl }) => {

  const Ministries = useGetMinistries().docs;
  return (
    <div
      style={{
        backgroundColor: "#111111",
        color: "white",
        height: "auto",
        padding: "12vh 0",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        <h2>Ministries</h2>
      </Stack>

      <Stack gap={4} style={{padding:"10px 20px"}}>
      {Ministries.map((ministry) => (
            <Badge bg="success">Ministry of {ministry.name}</Badge>
      ))}
            {/* <Badge bg="success">Local Government</Badge>
            <Badge bg="success">Technology and science</Badge>
            <Badge bg="success">infrastructure and urban development</Badge>
            <Badge bg="success">transport and logistics</Badge>
            <Badge bg="success">small and medium enterprise development</Badge>
            <Badge bg="success">Information and Broadcasting Services</Badge>
            <Badge bg="success">Mines and Minerals Development</Badge>
            <Badge bg="success">Economy and development</Badge>
            <Badge bg="success">water development and sanitation</Badge>
            <Badge bg="success">Labour and social security</Badge> */}
      </Stack>
    </div>
  );
};
export default Ministries;
