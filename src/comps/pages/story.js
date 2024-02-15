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
import useGetComments from "../hooks/useGetComments";

function Story() {
  const location = useLocation();
  const { data } = location.state || {};
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const author = useGetUser(data.author).docs;
  console.log("Author data:", author);

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
          content: newComment,
          author: user.firstName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setNewComment("");
        loadComments();
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        // Check if the user has already liked the article
        const likeSnapshot = await firebase
          .firestore()
          .collection("Reactions")
          .where("article_id", "==", data.id)
          .where("user_id", "==", firebase.auth().currentUser.uid)
          .get();
        if (!likeSnapshot.empty) {
          // User has already liked the article
          setLiked(true);
        } else {
          setLiked(false);
        }

        // Check if the user has already disliked the article
        const dislikeSnapshot = await firebase
          .firestore()
          .collection("Reactions")
          .where("article_id", "==", data.id)
          .where("user_id", "==", firebase.auth().currentUser.uid)
          .get();
        if (!dislikeSnapshot.empty) {
          // User has already disliked the article
          setDisliked(true);
        } else {
          setDisliked(false);
        }
      } catch (error) {
        console.error("Error checking like/dislike status:", error);
      }
    };
    checkLikeStatus();
  }, [data.id]);

  const handleLike = async () => {
    try {
      // Add like to Firestore
      await firebase.firestore().collection("Reactions").add({
        article_id: data.id,
        user_id: firebase.auth().currentUser.uid,
        liked: true,
      });
      setDisliked(false);
      setLiked(true); // Update state to reflect that article is liked
    } catch (error) {
      console.error("Error liking article:", error);
      alert("Failed to like article. Please try again.");
    }
  };

  const handleDislike = async () => {
    try {
      // Add dislike to Firestore
      await firebase.firestore().collection("Reactions").add({
        article_id: data.id,
        user_id: firebase.auth().currentUser.uid,
        liked: false,
      });
      setLiked(false);
      setDisliked(true); // Update state to reflect that article is disliked
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

  const Comments = useGetComments().docs;

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "12vh 0",
      }}
    >
      <div>
        <Stack style={{ color: "white", margin: "1vh 3vh" }}>
          <h2 className="display-5">{data.title}</h2>
          <Stack direction="horizontal">
            <Image
              src="assets/ministries/labour.png"
              alt=""
              style={{ width: "3vh" }}
              roundedCircle
            />
            {author.firstName} {author.lastName}
          </Stack>
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              margin: "1px 5px",
            }}
          >
            <span style={{ fontSize: "12px" }}>Posted 3 hours ago</span>
            <br />
            28 November 2023 . 2.4 Millions Readers
          </Card.Text>
          <br />
          <Image src={data.imagesUrls[0]} alt="labour" rounded />
          <Card.Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              margin: "1px 5px",
            }}
          >
            <br />
            <div>
            <p dangerouslySetInnerHTML={{ __html: expanded ? data.content : data.content.slice(0, 200) }} />
                {expanded ? data.content : data.content.slice(0, 200)}
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
                className="justify-content-center"
              >
                <i className="bi bi-share" onClick={handleShareShow}></i>
                {/* Like button */}
                {liked ? (
                  <i
                    className="bi bi-hand-thumbs-up-fill"
                    onClick={handleLike}
                  ></i>
                ) : (
                  <i className="bi bi-hand-thumbs-up" onClick={handleLike}></i>
                )}
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
              {/* {comments.map((comment, index) => (
                <Stack key={index} style={{ padding: "5px 12px 5px 20px" }}>
                  <h5 style={{ color: "white" }}>{comment.author}</h5>
                  <p className="lead justify-content-center">
                    {comment.content}
                  </p>
                </Stack>
              ))} */}
            </div>
          ) : (
            <div>
              <p>Please login to like, comment and share.</p>
            </div>
          )}
          <br/>
          <h2 className="text-center">Comments</h2>
          {comments.map((comment, index) => (
                <Stack key={index} style={{ padding: "5px 12px 5px 5px" }}>
                  <h5 style={{ color: "white" }}>{comment.author}</h5>
                  <p className="lead justify-content-center">
                    {comment.content}
                  </p>
                </Stack>
              ))}
        </Stack>
        
      </div>
      <Modal show={showShare} onHide={handleShareClose}>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
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
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="dark" onClick={handleShareClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Story;
