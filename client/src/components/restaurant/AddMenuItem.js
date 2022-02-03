import React, { useState } from "react";
import { useFirebase } from "../FirebaseProvider";
import { collection, updateDoc } from "firebase/firestore";

const AddMenuItem = () => {
  const { db } = useFirebase();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const getValue = (e) => {
    setName(e.target.value);
    setPrice(e.target.value);
  };

  const addValue = async () => {
    try {
      let collectionRef = collection(db, "restaurants");
      await updateDoc(collectionRef, {
        menu: {
          appetizers: {
            name: name,
            price: price,
          },
        },
      });
      console.log("success!");
      setName("");
      setPrice("");
    } catch (ex) {
      console.log("FIRESTORE ADD FAILURE!", ex.message);
    }
  };

  return (
    <div>
      <input onBlur={getValue} type="text" placeholder="Name" />
      <input onBlur={getValue} type="text" placeholder="Price" />
      <button type="button" onClick={addValue}>
        Add
      </button>
    </div>
  );
};

export default AddMenuItem;
