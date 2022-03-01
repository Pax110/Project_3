import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useFirebase } from "../FirebaseProvider";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";

const RestroUpdateUploader = ({ setPhotoURL }) => {
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
    const uploadTask = uploadBytesResumable(restaurantImageRef, image);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.log("ERROR MESSAGE", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotoURL(downloadURL);
        });
      }
    );
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
        <Button
          variant="primary"
          onClick={upload}
          style={{
            backgroundColor: "#feaa00",
            borderColor: "#feaa00",
            padding: "0.25rem",
            margin: "1%",
          }}
        >
          Upload Profile Photo
        </Button>
      </center>
    </div>
  );
};
export default RestroUpdateUploader;
