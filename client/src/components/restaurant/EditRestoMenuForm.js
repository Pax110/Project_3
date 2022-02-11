import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import background from "../landingimage/food1.jpg";
import Appetizer from "./EditRestoMenu_Appetizers";
import Main from "./EditRestoMenuForm_Mains";
import Dessert from "./EditRestoMenuForm_Desserts";

const EditRestoMenuForm = (props) => {
  const docValue = props.document;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: docValue,
  });
  const { id } = useParams();
  const { db } = useUserAuth();

  const onSubmit = async (data) => {
    console.log("data submitted", data);
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, id);

    const receivedData = updateDoc(docRef, {
      menu: data.menu,
    });
    console.log("receivedData", receivedData);
  };

  const onError = (err) => console.log("error is", err);

  return (
    //Needs styling here...
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        style={{
          width: "600px",
          backgroundColor: "rgba(225, 229, 235, 0.9)",
        }}
      >
        <h3>EditRestoMenuForm</h3>
        <h3>Menu</h3>

        {/* APPETIZERS */}

        <h4>Appetizer</h4>
        {/* {JSON.stringify(docValue.menu.appetizers)} */}
        {docValue &&
          docValue.menu.appetizers.map((data, index) => (
            <>
              <Appetizer register={register} key={index} index={index} />
            </>
          ))}
        <Button>Add Item</Button>

        {/* MAINS */}

        <h4>Mains</h4>
        {/* {JSON.stringify(docValue.menu.mains)} */}

        {docValue &&
          docValue.menu.mains.map((data, index) => (
            <>
              <Main register={register} key={index} index={index} />
            </>
          ))}
        <Button>Add Item</Button>

        {/* DESSERTS */}

        <h4>Desserts</h4>
        {/* {JSON.stringify(docValue.menu.desserts)} */}
        {docValue &&
          docValue.menu.desserts.map((data, index) => (
            <>
              <Dessert register={register} key={index} index={index} />
            </>
          ))}
        <Button>Add Item</Button>
        <Button onClick={handleSubmit(onSubmit, onError)}>Update</Button>
      </Container>
    </div>
  );
};

export default EditRestoMenuForm;
