import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const FileUploader = () => {
  const [image, setImage] = useState("");
  const upload = (restaurant) => {
    if (image == null) return;
    // Reference: https://firebase.google.com/docs/storage/web/upload-files?authuser=0
    let restaurantImageRef = ref(
      storage,
      `/restaurants/${restaurant.id}/${image.name + uuidv4()}`
    );
    uploadBytes(restaurantImageRef, image).then(alert("Success"));

  };

  return (
    <div>
      <center>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={upload}>Upload</button>
      </center>
    </div>
  );
};
export default FileUploader;
