import React, { useState } from "react";
import { useFirebase } from "../FirebaseProvider";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";

const RestroUpdateUploader = () => {
  let params = useParams();
  let id = params.id;
  console.log(id);
  const { db } = useFirebase();
  const [image, setImage] = useState("");
  const { store } = useFirebase();
  const upload = (restaurant) => {
    let filename = image.name;
    let extension = filename.split(".").pop();
    if (image == null) return;
    console.log("restro id", id);

    let restaurantImageRef = ref(
      store,
      `/restaurants/${id}/${uuidv4() + "." + extension}`
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
        <button onClick={upload}>Upload Profile Photo</button>
      </center>
    </div>
  );
};
export default RestroUpdateUploader;
