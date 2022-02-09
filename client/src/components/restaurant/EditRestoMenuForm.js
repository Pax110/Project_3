import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Appetizer = ({ register, index }) => {
 
  // const r = register(`name[${index}]`);
  // console.log("r is",r)
  return (
    <Container
      style={{
        width: "400px",
        backgroundColor: "#feaa00",
      }}
    >
      <label>Item Name: </label>
      <br />
      <input type="text"  {...register(`menu.appetizers[${index}].name`)}/>
      <br />
      <label>Item Price: </label>
      <br />
      <input type="text" {...register(`menu.appetizers[${index}].price`)} />
      <input type="hidden" {...register(`menu.appetizers[${index}].type`)} value="appetizers" />
      <br />

      <br />
    </Container>
  );
};
const EditRestoMenuForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { db } = useUserAuth();
  const docValue = props.document;

  const onSubmit = async (data) => {
    console.log("data submitted", data)
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, id);
    const receivedData = updateDoc(docRef, {
        menu: data
    })
    console.log("receivedData",receivedData)
  }
  const onError = (err) => console.log("error is",err);

  return (
    <div>
      <h3>EditRestoMenuForm</h3>
      <h3>Menu</h3>
      <div>Appetizer</div>
      {JSON.stringify(docValue.data.menu.appetizers)}
      {docValue &&
        docValue.data.menu.appetizers.map((data, index) => (
          <Appetizer register={register} key={index} index={index} />
        ))}
      <button onClick={handleSubmit(onSubmit, onError)}>Update</button>
    </div>
  );
};

export default EditRestoMenuForm;
