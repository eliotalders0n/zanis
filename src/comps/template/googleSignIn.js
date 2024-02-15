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
        // Check if this is a new user
        if (result.additionalUserInfo.isNewUser) {
          // Perform additional registration steps if needed
          firebase
            .auth()
            .createUserWithEmailAndPassword(result.email, result.password)
            .then((userCredential) => {
              console.log(userCredential);
              var user = userCredential.user;
              firebase
                .firestore()
                .collection("Users")
                .doc(user.uid)
                .set({
                  firstName: "",
                  lastName: "",
                  photoUrl: result.photoUrl,
                  email: result.email,
                  role: "user",
                  age: "",
                  contact: "",
                  gender: "",
                  address: "",
                  status: "Approved",
                  admin: false,
                })
                .then(() => {
                  navigate("/home");
                  console.log("added to database");
                })
                .catch((e) => console.log(e));

              // Signed ins
            })
            .catch((error) => {
              var errorMessage = error.message;
              alert(errorMessage);

              // ..
            });
          console.log("New user signed up with Google:", result.user);
        }
      })
      .catch((error) => {
        // Handle errors
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
