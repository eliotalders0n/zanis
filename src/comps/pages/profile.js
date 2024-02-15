import React, { useEffect, useState } from "react";
import { Card, Stack, Image, Button, Container } from "react-bootstrap";
import firebase from "./../../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user_, setdocs] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        console.log(doc.data());
        setdocs(doc.data());
      });
  }, []);

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/", { replace: true });
        window.location.reload(false);
      });
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "12vh 2vh 12vh 2vh",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        <h2>Profile</h2>
        <Button className="p-2 ms-auto" variant="dark" onClick={() => Logout()}>
          Logout
        </Button>
      </Stack>

      <Stack style={{ backgroundColor: "", margin: "0 35%" }}>
        <Image src={user_ && user_.photoURL} />
      </Stack>
      <p className="text-center">
        {user_ && user_.firstName} {user_ && user_.lastName} <br />{" "}
        {user_ && user_.email}
      </p>
      <Stack style={{ backgroundColor: "" }}>
        <h4>History</h4>
        <br />
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
            <p className="lead">
              "Beggin them to choose me, I never thought id feel this way"
            </p>
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <hr />
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
          <hr />
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
          <hr />
        </div>
      </Stack>
    </Container>
  );
};
export default Profile;
