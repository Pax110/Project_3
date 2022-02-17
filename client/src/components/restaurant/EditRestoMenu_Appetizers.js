import { collection, deleteField, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useFirebase } from "../FirebaseProvider";

const Appetizer = ({ register, index }) => {
  // const r = register(`name[${index}]`);
  // console.log("r is",r)
  const { id } = useParams();
  

  const { unregister } = useForm();

  const handleDelete = (data) => {
    console.log("Deleting an item in Appetizer with index number", index);

    console.log("which has a doc id", id);
    unregister(`menu.appetizers[${index}].name`);
    console.log("unregistering...");
    unregister(`menu.appetizers[${index}].name`);
    // const path = menu.appetizers[${index}].name
    console.log(unregister(`menu.appetizers[${index}].name`));
//get access to the doc submitting 

  };

  //DELETING Directly to the Database Field (Not working, not recoemmended)
  // let collRef = collection(db, "restaurants");
  // let docRef = doc(collRef, id);
  // const path = `menu.appetizers[${index}]`
  // console.log("path is",path)
  // await updateDoc(docRef, {
  //   path : deleteField()
  // });

  return (
    <Container
      style={{
        width: "400px",
        backgroundColor: "#feaa00",
      }}
    >
      <label>Item Name: </label>
      <br />
      <input type="text" {...register(`menu.appetizers[${index}].name`)} />
      <br />
      <label>Item Price: </label>
      <br />
      <input type="text" {...register(`menu.appetizers[${index}].price`)} />
      <input
        type="hidden"
        {...register(`menu.appetizers[${index}].type`)}
        value="appetizers"
      />
      <input
        type="hidden"
        {...register(`menu.appetizers[${index}].menuphoto`)}
        value="appetizers"
      />
      <br />
      <Button>Upload Images</Button>
      <br />
      <Button variant="danger" onClick={handleDelete}>
        DELETE
      </Button>
      <br />

      <br />

      <br />
    </Container>
  );
};

export default Appetizer;