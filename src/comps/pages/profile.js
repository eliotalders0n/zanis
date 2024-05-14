import React, { useEffect, useState } from "react";
import { Card, Stack, Image, Container, Form, Modal } from "react-bootstrap";
import firebase from "./../../firebase";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../template/themeContext";
import { Button, LinearProgress } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userpic, setUserPic] = useState(null);

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

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setImages(filesArray);
  };

  const handleAddFeedback = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      setSubmitting(true);
      const storageRef = firebase.storage().ref();
      const articleImagesRef = storageRef.child(`article_images`);

      const promises = [];
      const imagesUrls = [];

      for (const image of images) {
        const uploadTask = articleImagesRef.child(image.name).put(image);

        // Pushing the upload task promise to the promises array
        promises.push(uploadTask);

        // Listening for the completion of each upload task
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error uploading image:", error);
            alert("Failed to upload image. Please try again.");
          },
          () => {
            // Upload completed successfully, get download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              imagesUrls.push(downloadURL);

              // If all images are uploaded, proceed to add article data to Firestore
              if (imagesUrls.length === images.length) {
                Promise.all(promises).then(() => {
                  firebase
                    .firestore()
                    .collection("Feedback")
                    .add({
                      content,
                      imagesUrls,
                      location: user_.address,
                      email: user_.email,
                      ministry: user_.ministry,
                      firstName: user_.firstName,
                      lastName: user_.lastName,
                      createdAt:
                        firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(() => {
                      // Reset form fields after successful submission
                      setLocation("");
                      setContent("");
                      setImages([]);
                      setUploadProgress(0);
                      setShowModal(true);
                      setSubmitting(false);
                      // Redirect to another page or perform any other action
                    })
                    .catch((error) => {
                      console.error("Error adding article:", error);
                      alert("Failed to add article. Please try again.");
                    });
                });
              }
            });
          }
        );
      }
    } catch (error) {
      console.error("Error adding article:", error);
      alert("Failed to add article. Please try again.");
      setSubmitting(false);
    }
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`profile_pictures/${file.name}`);

    const uploadTask = fileRef.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading profile picture:", error);
        // Handle error
      },
      () => {
        // Upload completed successfully, get download URL
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setUserPic(url); // Set the URL of the uploaded image
          setUploading(false);
        });
      }
    );
    setUploading(true);
  };

  const updateProfilePicture = () => {
    const currentUser = firebase.auth().currentUser;
    const userId = currentUser.uid;

    firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .update({
        photoURL: userpic, // Save the URL of the uploaded image in the "photoURL" field of the user document
      })
      .then(() => {
        console.log("Profile picture updated successfully");
        // Optionally, you can reload the page or update the user's profile picture state
      })
      .catch((error) => {
        console.error("Error updating profile picture:", error);
        // Handle error
      });
  };

  const removeProfilePicture = () => {
    const currentUser = firebase.auth().currentUser;
    const userId = currentUser.uid;

    firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .update({
        photoURL: firebase.firestore.FieldValue.delete(), // Remove the "photoURL" field from the user document
      })
      .then(() => {
        console.log("Profile picture removed successfully");
        setUserPic(""); // Clear the URL of the profile picture from the state
      })
      .catch((error) => {
        console.error("Error removing profile picture:", error);
        // Handle error
      });
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <Container
      fluid
      style={{
        backgroundColor: theme === "light" ? "white" : "#111111",
        color: theme === "light" ? "#111111" : "white",
        minHeight: "100vh",
        padding: "12vh 2vh 12vh 2vh",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        <h2>Profile</h2>
        <Button
        variant="contained"
        onClick={toggleTheme}
        className="p-2 ms-auto"
        size="small"
        style={{ backgroundColor: theme === "light" ? "#111111" : "white",
        color: theme === "light" ? "white" : "#111111", }}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
        
      </Stack>

      <Stack
        style={{
          position: "relative",
          width: "30vh",
          height: "30vh",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Image
          src={user_ && user_.photoURL}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <label
          htmlFor="profilePictureInput"
          style={{
            position: "absolute",
            top: "15px",
            right: "30px",
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "60%",
            padding: "5px",
          }}
        >
          <i className="bi bi-pencil-fill"></i>
        </label>
        <input
          id="profilePictureInput"
          type="file"
          onChange={handleProfilePictureChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        <Button
          size="sm"
          fullWidth
          variant="contained"
          onClick={updateProfilePicture}
          style={{
            fontSize: "10px",
            position: "absolute",
            bottom: "35px",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          Update Picture
        </Button>
        <Button
          size="sm"
          fullWidth
          variant="contained"
          onClick={removeProfilePicture}
          style={{
            fontSize: "10px",
            position: "absolute",
            bottom: "5px",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          Remove Picture
        </Button>
      </Stack>
      {uploading && <LinearProgress variant="determinate" value={uploadProgress} />}
      <p className="text-center">
        {user_ && user_.firstName} {user_ && user_.lastName} <br />{" "}
        {user_ && user_.email}
      </p>
      
      <Stack>
      <Button variant="contained" size="small" style={{width: "40%", marginLeft: "30%", backgroundColor: theme === "light" ? "#111111" : "white",
        color: theme === "light" ? "white" : "#111111", }}  onClick={() => Logout()}>
          Logout
        </Button>
      <br/>
        <Form onSubmit={handleAddFeedback}>
          <h2>Feedback</h2>
          <p className="lead">
            Any errors, bugs or issues you are facing can be reported here.
            Including news that goes against our community guidelines
          </p>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="please enter your feedback"
          />
          <hr />
          <Form.Control
            type="file"
            multiple
            onChange={handleFileChange}
            required
          />
          <br />
          <Button type="submit" disabled={submitting} variant="contained" size="lg" style={{backgroundColor: theme === "light" ? "#111111" : "white",
        color: theme === "light" ? "white" : "#111111", }}>
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      </Stack>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: theme === "light" ? "white" : "#111111",
            color: theme === "light" ? "#111111" : "white",
          }}
        >
          <Modal.Title>Feedback submitted successfully, thank you.</Modal.Title>
        </Modal.Header>
        <Modal.Footer
          style={{
            backgroundColor: theme === "light" ? "white" : "#111111",
            color: theme === "light" ? "#111111" : "white",
          }}
        >
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: theme === "light" ? "white" : "#111111",
              color: theme === "light" ? "#111111" : "white",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Profile;
