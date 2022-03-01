import { collection, deleteField, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useFirebase } from "../FirebaseProvider";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { ImageAdd } from "@styled-icons/boxicons-solid/ImageAdd";
import { AddImageIcon } from "../icon/AddImageIcon";

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
    <Card
      style={{
        width: "400px",
        backgroundColor: "#f7f4ef",
        display: "inline-block",
        padding: "3%",
        margin: "2.5%",
        justifyContent: "center",
      }}
    >
      <Card.Body>
        Item Name:
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
        <Button
          style={{
            backgroundColor: "#feaa00",
            borderColor: "#feaa00",
            padding: "0.25rem",
            float: "left",
          }}
        >
          <AddImageIcon style={{ width: "30px", height: "30px" }} />
          Upload Images
        </Button>
        <br />
        <Button
          variant="danger"
          style={{
            padding: "0.25rem",
            float: "right",
          }}
          onClick={handleDelete}
        >
          <Delete style={{ width: "30px", height: "30px" }} />
          Delete
        </Button>
      </Card.Body>
      <Button
        style={{
          backgroundColor: "#feaa00",
          borderColor: "#feaa00",
          padding: "0.25rem",
          float: "left",
        }}
      >
        <AddImageIcon style={{ width: "30px", height: "30px" }} />
        Upload Images
      </Button>
      <br />
      <Button
        variant="danger"
        style={{
          padding: "0.25rem",
          float: "right",
        }}
        onClick={handleDelete}
      >
        <Delete style={{ width: "30px", height: "30px" }} />
        Delete
      </Button>
    </Card>
  );
};

export default Appetizer;
