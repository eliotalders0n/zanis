import { useState, useEffect } from "react";
import firebase from "../../firebase";

const useGetResources = (id) => {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Resources")
      .onSnapshot((doc) => {
        const quotes = [];
        doc.docs.forEach((document) => {
          const nb = {
            id: document.id,
            ...document.data(),
          };
          quotes.push(nb);
        });
        setdocs(quotes);
      });
  }, []);
  return { docs };
};

export default useGetResources;
