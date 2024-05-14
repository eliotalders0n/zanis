import { useState, useEffect } from "react";
import firebase from "../../firebase";

const useFetchRelatedArticles = (currentArticle) => {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesSnapshot = await firebase
          .firestore()
          .collection("Articles")
          .where("ministry", "==", currentArticle.ministry)
          .where("id", "!=", currentArticle.id)
          .limit(5)
          .orderBy("createdAt", "desc")
          .get();

        const articlesData = articlesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setdocs(articlesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return { docs };
};

export default useFetchRelatedArticles;
