import React, { useEffect, useState } from "react";
import {
  Card,
  Stack,
  Image,
  Button,
  Form,
  InputGroup,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  TelegramShareButton,
} from "react-share";
import useGetUser from "../hooks/useGetUser";
import firebase from "../../firebase";
// import useGetComments from "../hooks/useGetComments";
import { useTheme } from "../template/themeContext";

function Story() {
  const location = useLocation();
  const { data } = location.state || {};
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  const author = useGetUser(data.author).docs;
  // console.log("Author data:", author);

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authUnsubscribe = firebase
      .auth()
      .onAuthStateChanged((loggedInUser) => {
        if (loggedInUser) {
          setIsLoggedIn(true);
          const userDocRef = firebase
            .firestore()
            .collection("Users")
            .doc(loggedInUser.uid);
          const unsubscribe = userDocRef.onSnapshot((doc) => {
            setUser(doc.data());
          });
          return () => unsubscribe();
        } else {
          setIsLoggedIn(false);
          setUser({});
        }
      });

    return () => authUnsubscribe();
  }, []);

  const loadComments = async () => {
    const commentsSnapshot = await firebase
      .firestore()
      .collection("Comments")
      .orderBy("timestamp", "desc")
      .where("article_id", "==", data.id)
      .get();
    const commentsData = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setComments(commentsData);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleComment = async (event) => {
    event.preventDefault();
    try {
      if (newComment.trim() !== "") {
        await firebase.firestore().collection("Comments").add({
          article_id: data.id,
          authorId: firebase.auth().currentUser.uid,
          content: newComment,
          author: user.firstName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setNewComment("");
        loadComments();
        console.log(" comments : " + comments);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        const likeSnapshot = await firebase
          .firestore()
          .collection("Reactions")
          .where("article_id", "==", data.id)
          .where("liked", "==", true)
          .get();
        setLikesCount(likeSnapshot.size);

        const dislikeSnapshot = await firebase
          .firestore()
          .collection("Reactions")
          .where("article_id", "==", data.id)
          .where("liked", "==", false)
          .get();
        setDislikesCount(dislikeSnapshot.size);

        // Check if the current user has already liked/disliked the article
        const currentUserLike = likeSnapshot.docs.find(
          (doc) => doc.data().user_id === firebase.auth().currentUser.uid
        );
        setLiked(!!currentUserLike);

        const currentUserDislike = dislikeSnapshot.docs.find(
          (doc) => doc.data().user_id === firebase.auth().currentUser.uid
        );
        setDisliked(!!currentUserDislike);
      } catch (error) {
        console.error("Error checking like/dislike status:", error);
      }
    };

    checkLikeStatus();
  }, [data.id]);

  const handleLike = async () => {
    try {
      await firebase.firestore().collection("Reactions").add({
        article_id: data.id,
        user_id: firebase.auth().currentUser.uid,
        liked: true,
      });
      console.log("like status: " + liked);
    } catch (error) {
      console.error("Error liking article:", error);
      alert("Failed to like article. Please try again.");
    }
  };

  const handleDislike = async () => {
    try {
      await firebase.firestore().collection("Reactions").add({
        article_id: data.id,
        user_id: firebase.auth().currentUser.uid,
        liked: false,
      });
      console.log("like status: " + liked);
    } catch (error) {
      console.error("Error disliking article:", error);
      alert("Failed to dislike article. Please try again.");
    }
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [showShare, setShowShare] = useState(false);

  const handleShareClose = () => setShowShare(false);
  const handleShareShow = () => setShowShare(true);

  // const Comments = useGetComments().docs;

  const { theme } = useTheme();

  const [authors, setAuthors] = useState({});
  useEffect(() => {
    const unsubscribeAuthors = firebase
      .firestore()
      .collection("Users")
      .onSnapshot((snapshot) => {
        const authorsData = {};
        snapshot.docs.forEach((doc) => {
          authorsData[doc.id] = doc.data();
        });
        setAuthors(authorsData);
      });

    return () => {
      unsubscribeAuthors();
    };
  });

  

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "12vh 0",
      }}
    >
      <div>
        <Stack
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
            margin: "1vh 3vh",
          }}
        >
          <h2 className="display-5">{data.title}</h2>
          <Stack direction="horizontal">
            <Image
              src={authors[data.author]?.photoURL}
              alt=""
              style={{ width: "3vh", height: "3vh", marginRight: "5px" }}
              roundedCircle
            />
            {author.firstName} {author.lastName}
          </Stack>
          <Card.Text
            style={{
              backgroundColor: theme === "light" ? "white" : "black",
              color: theme === "light" ? "black" : "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            <span style={{ fontSize: "12px" }}>Posted at </span>
            <br />
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <br />
          <Stack
            style={{
              position: "relative",
              width: "100%",
              height: "45vh",
              borderRadius: "5%",
              overflow: "hidden",
              margin: "0",
            }}
          >
            <Image
              src={data.imagesUrls[0]}
              alt={data.ministry}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              rounded
            />
          </Stack>
          <Card.Text
            style={{
              backgroundColor: theme === "light" ? "white" : "black",
              color: theme === "light" ? "black" : "white",
              fontSize: "16px",
              margin: "1px 5px",
            }}
          >
            <br />
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: expanded ? data.content : data.content.slice(0, 200),
                }}
              />
              {/* {expanded ? data.content : data.content.slice(0, 200)} */}
              {data.content.length > 200 && (
                <Button
                  size="sm"
                  style={{ marginLeft: "3vh" }}
                  variant="outline-primary"
                  onClick={handleClick}
                >
                  {expanded ? "Click to Collapse" : "Click to Expand"}
                </Button>
              )}
              {/* </p> */}
            </div>
          </Card.Text>
          <hr />
          {isLoggedIn ? (
            <div>
              {/* Your code to display user data */}
              <Stack
                direction="horizontal"
                gap={5}
                // className="justify-content-center"
              >
                <i className="bi bi-share" onClick={handleShareShow}></i>
                {/* Like button */}
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="justify-content-center p-2 ms-auto"
                >
                  {liked ? (
                    <i
                      className="bi bi-hand-thumbs-up-fill"
                      onClick={handleLike}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-hand-thumbs-up"
                      onClick={handleLike}
                    ></i>
                  )}
                  <span>{likesCount}</span>
                  {/* Dislike button */}
                  {disliked ? (
                    <i
                      className="bi bi-hand-thumbs-down-fill"
                      onClick={handleDislike}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-hand-thumbs-down"
                      onClick={handleDislike}
                    ></i>
                  )}
                  <span>{dislikesCount}</span>
                </Stack>
              </Stack>
              <Form onSubmit={handleComment}>
                <InputGroup className="mb-3 my-3">
                  <Form.Control
                    aria-label="user comment"
                    type="text"
                    placeholder="your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    autoFocus
                  />
                  <Button
                    type="submit"
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Comment
                  </Button>
                </InputGroup>
              </Form>
            </div>
          ) : (
            <div>
              <p>Please login to like, comment and share.</p>
            </div>
          )}
          <br />
          <h2 className="text-center">Comments</h2>
          {comments.map((comment, index) => (
            <Stack
              key={index}
              direction="horizontal"
              style={{
                padding: "5px 12px 5px 5px",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
              }}
            >
              <Image
                src={authors[comment.authorId]?.photoURL}
                style={{
                  width: "6vh",
                  height: "6vh",
                  marginRight: "5px",
                }}
                roundedCircle
              />
              <Stack
                style={{
                  padding: "6px",
                  width: "80%",
                  backgroundColor:
                    theme === "light"
                      ? "rgba(150,200,200,0.3)"
                      : "rgba(30,30,30,0.5)",
                  borderRadius: "10px",
                }}
              >
                <h5>{comment.author}</h5>
                <p>{comment.content}</p>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </div>
      <Modal show={showShare} onHide={handleShareClose}>
        <Modal.Body
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <h4 className="display-6 text-center">
            Share this with your social Community!
            <br />
            <br />
            <Row>
              <Col>
                <FacebookShareButton
                  url={`https://zanis-pro.web.app/story/${data.id}`}
                  quote="ZANIS.To Inform, Educate and Entertain the Nation!"
                >
                  <i className="bi bi-facebook"></i>
                </FacebookShareButton>
              </Col>
              <Col>
                <WhatsappShareButton
                  url={`https://zanis-pro.web.app/story/${data.id}`}
                  title="ZANIS "
                  separator="To Inform, Educate and Entertain the Nation! "
                >
                  <i className="bi bi-whatsapp"></i>
                </WhatsappShareButton>
              </Col>
              <Col>
                <TwitterShareButton
                  title="ZANIS"
                  url={`https://zanis-pro.web.app/story/${data.id}`}
                  via={"ZANIS. To Inform, Educate and Entertain the Nation"}
                >
                  <i className="bi bi-twitter"></i>
                </TwitterShareButton>
              </Col>
              <Col>
                <TelegramShareButton
                  url={`https://zanis-pro.web.app/story/${data.id}`}
                  title="ZANIS"
                  description="ZANIS. To Inform, Educate and Entertain the Nation"
                >
                  <i className="bi bi-telegram"></i>
                </TelegramShareButton>
              </Col>
            </Row>
          </h4>
          <br />
          <br />
          <p className="lead">or copy link</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={`https://zanis-pro.web.app/story/${data.id}`}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-success"
              id="button-addon2"
              onClick={() => {
                navigator.clipboard
                  .writeText(`https://zanis-pro.web.app/story/${data.id}`)
                  .then(() => {
                    console.log("Text copied to clipboard");
                  })
                  .catch((error) => {
                    console.error("Error copying text to clipboard:", error);
                  });
              }}
            >
              Copy
            </Button>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <Button variant="dark" onClick={handleShareClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Story;
