import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
// User Interface
import firebase from "./firebase";
import LoginRoutes from "./loginroutes";
import Routers from "./routes";

const App = () => {
  const [state, setstate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when the component mounts

    const authStateChanged = (user) => {
      if (user) {
        setstate(true);
        setIsLoading(false); // Set isLoading to false when the user state changes
      } else {
        setstate(false);
        setIsLoading(false); // Set isLoading to false when the user state changes
      }
    };

    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {error && (
        <Typography
          variant="body2"
          color="error"
          style={{
            backgroundColor: "rgb(0,70,0)",
            fontSize: "14px",
            color: "lightgrey",
            padding: "6px",
          }}
          align="center"
        >
          {error}
        </Typography>
      )}
      {state && <LoginRoutes />}
      {!state && <Routers />}
    </>
  );
};

export default App;
