import React, { useState } from "react";
import { useFirebase } from "../FirebaseProvider";
import { arrayUnion, collection, doc, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const AddAppItem = () => {
  const { db } = useFirebase();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addAppItem = async () => {
    try {
      let collectionRef = collection(db, "restaurants");
      let docRef = doc(collectionRef, id);
      await setDoc(
        docRef,
        {
          menu: {
            appetizers: arrayUnion({
              name: name,
              price: price,
            }),
          },
        },
        { merge: true }
      );
      console.log("success!");
      setName("");
      setPrice("");
    } catch (ex) {
      console.log("FIRESTORE ADD FAILURE!", ex.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="button" onClick={addAppItem}>
        Add
      </button>
    </div>
  );
};

export default AddAppItem;