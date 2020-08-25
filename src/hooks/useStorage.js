import React, { useState, useEffect } from "react";
import { storage } from "firebase";
import { db } from "../firebase/util";

const useStorage = (category, file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(0);
  useEffect(() => {
    const storageRef = storage.ref(`${category}/${file.name}`);
    const collectionRef = db.collection("answers");
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        storageRef
          .getDownloadURL()
          .get()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
