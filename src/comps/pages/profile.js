import React from "react";
import { Card, Badge, Stack, Image, Button } from "react-bootstrap";

const Profile = ({ title, date, postedBy, imageUrl }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "auto",
        padding: "12vh 0",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        <h2>Profile</h2>
        <Button className="p-2 ms-auto" variant="dark">
          Logout
        </Button>
      </Stack>

      <Stack style={{ backgroundColor: "", margin: "0 30%" }}>
        <Image src="assets/profile.png" />
        <br />
        <p className="text-center">John Mutalepwa Kangwa</p>
      </Stack>

      <Stack style={{ backgroundColor: "" }}>
        <h4>History</h4>
        <br/>
        <div>
          <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
            <Image
              src="assets/ministries/labour.png"
              alt=""
              style={{ width: "3vh" }}
              roundedCircle
            />
            Labour and social security
          </Stack>
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            comment
            <p className="lead">"Beggin them to choose me, I never thought id feel this way"</p>
            
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <hr/>
        </div>

        <div>
          <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
            <Image
              src="assets/ministries/youth.png"
              alt=""
              style={{ width: "3vh" }}
              roundedCircle
            />
            First win for junior basketball coach
          </Stack>
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            comment
            <p className="lead">"What a waste, zoona"</p>
            
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <hr/>
        </div>

        <div>
          <Stack direction="horizontal" gap={2} style={{ color: "white" }}>
            <Image
              src="assets/ministries/justice.png"
              alt=""
              style={{ width: "3vh" }}
              roundedCircle
            />
           Justice for kabompo
          </Stack>
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            comment
            <p className="lead">"But why"</p>
            
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <hr/>
        </div>
      </Stack>
    </div>
  );
};
export default Profile;
