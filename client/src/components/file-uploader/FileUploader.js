import React, { useState } from "react";
import { useFirebase } from "../FirebaseProvider";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const FileUploader = () => {
  const [image, setImage] = useState("");
  const { store } = useFirebase();
  const upload = (restaurant) => {
    let filename = image.name;
    let extension = filename.split(".").pop();
    if (image == null) return;
    console.log("restro id here", restaurant.id);
    // Reference: https://firebase.google.com/docs/storage/web/upload-files?authuser=0
    let restaurantImageRef = ref(
      store,
      `/restaurants/${restaurant.id}/${uuidv4() + "." + extension}`
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
