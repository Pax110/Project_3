import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import background from "../landingimage/wood.jpg";
import Appetizer from "./EditRestoMenu_Appetizers";
import Main from "./EditRestoMenuForm_Mains";
import Dessert from "./EditRestoMenuForm_Desserts";
import { Edit } from "@styled-icons/feather/Edit";

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

  //FINAL DOC UPDATE

  const onSubmit = async (data) => {
    console.log("data attempting to submit..", data.menu);

    //delete an element (filte)

    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, id);

    // const receivedData = updateDoc(docRef, {
    //   menu: data.menu,
    // });
    // console.log("receivedData", receivedData);
  };

  const onError = (err) => console.log("error is", err);
  const myStyle = { fontFamily: "Bebas Neue" };
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
        <h1 className="p-4 box mt-3 text-center" style={myStyle}>
          Menu
        </h1>
        <Card style={{ width: "50rem", margin: "auto", marginBottom: "10px" }}>
          <Card.Body>
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
          </Card.Body>
        </Card>
        {/* MAINS */}
        <Card style={{ width: "50rem", margin: "auto", marginBottom: "10px" }}>
          <Card.Body>
            <h4>Mains</h4>
            {/* {JSON.stringify(docValue.menu.mains)} */}

            {docValue &&
              docValue.menu.mains.map((data, index) => (
                <>
                  <Main register={register} key={index} index={index} />
                </>
              ))}
            <Button>Add Item</Button>
          </Card.Body>
        </Card>
        {/* DESSERTS */}
        <Card style={{ width: "50rem", margin: "auto", marginBottom: "10px" }}>
          <Card.Body>
            <h4>Desserts</h4>
            {/* {JSON.stringify(docValue.menu.desserts)} */}
            {docValue &&
              docValue.menu.desserts.map((data, index) => (
                <>
                  <Dessert register={register} key={index} index={index} />
                </>
              ))}
            <Button>Add Item</Button>
          </Card.Body>
        </Card>
        <Button onClick={handleSubmit(onSubmit, onError)}>
          <Edit style={{ width: "30px", height: "30px" }} />
          Update
        </Button>
      </Container>
      <Edit style={{ width: "30px", height: "30px" }} />
    </div>
  );
};

export default EditRestoMenuForm;
