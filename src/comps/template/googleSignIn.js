import React from "react";
import firebase from "./../../firebase";
import Button from "@mui/material/Button";
import { Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;

        // Check if the user exists in Firestore
        firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) {
              // User doesn't exist, create a new user document
              firebase.firestore().collection("Users").doc(user.uid).set({
                firstName: "",
                lastName: "",
                photoUrl: user.photoURL,
                email: user.email,
                role: "user",
                age: "",
                contact: "",
                gender: "",
                address: "",
                status: "Approved",
                admin: false,
              });
            }
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error checking Firestore:", error);
          });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
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
      <Stack
        style={{
          border: "1px solid",
          borderColor: "grey",
          padding: "12px",
          color: "white",
          borderRadius: "10px",
          height: "70vh",
        }}
      >
        <Stack style={{ marginTop: "20vh" }}>
          <h2 className="display-2 text-center">
            <i className="bi bi-google"></i>
          </h2>
          <br />
          <Button
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            color="success"
          >
            Sign in with Google
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default GoogleSignInButton;
