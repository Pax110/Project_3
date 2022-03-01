import React, { useState } from "react";
import { useFirebase } from "../FirebaseProvider";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";
import { crop } from "../../Crop";

const RestroUpdateUploader = ({ setPhotoURL }) => {
  let params = useParams();
  let id = params.id;
  console.log(id);
  const { db } = useFirebase();
  const [image, setImage] = useState("");
  const { store } = useFirebase();
  const upload = (restaurant) => {
    // let filename = image.name;
    // let extension = filename.split(".").pop();
    if (image == null) return;
    console.log("restro id", id);

    let restaurantImageRef = ref(
      store,
      `/restaurants/${id}/${uuidv4() + ".jpg"}`
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
            if (e.target.files.length > 0) {
              let cropImage = URL.createObjectURL(e.target.files[0]);

              crop(cropImage, 1).then((img) => {
                // add that image to the images to be sent to AWS
                setImage(img);
              });
            }
          }}
        />
        <button onClick={upload}>Upload Profile Photo</button>
      </center>
    </div>
  );
};
export default RestroUpdateUploader;
