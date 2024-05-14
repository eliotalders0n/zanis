import { useState, useEffect } from "react";
import firebase from "../../firebase";

const useGetPodcasts = (id) => {
  const [docs, setDocs] = useState([]);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("Podcasts")
      .onSnapshot((snapshot) => {
        const podcasts = [];
        const audioFiles = [];
        snapshot.docs.forEach((doc) => {
          const podcastData = { id: doc.id, ...doc.data() };
          podcasts.push(podcastData);
          if (podcastData.audioURL) {
            audioFiles.push({ title: podcastData.title, src: podcastData.audioURL, ministry: podcastData.ministry, createdAt: podcastData.createdAt});
          }
        });
        setDocs(podcasts);
        setAudioData(audioFiles);
      });

    return unsubscribe;
  }, []);

  return { docs, audioData };
};

export default useGetPodcasts;