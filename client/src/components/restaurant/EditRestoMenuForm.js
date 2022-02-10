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

      <br />
    </Container>
  );
};
const Main = ({ register, index }) => {
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
      <input type="text" {...register(`menu.mains[${index}].name`)} />
      <br />
      <label>Item Price: </label>
      <br />
      <input type="text" {...register(`menu.mains[${index}].price`)} />
      <input
        type="hidden"
        {...register(`menu.mains[${index}].type`)}
        value="mains"
      />
       <input
        type="hidden"
        {...register(`menu.mains[${index}].menuphoto`)}
        value="mains"
      />
      <br />

      <br />
    </Container>
  );
};
const Dessert = ({ register, index }) => {
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
      <input type="text" {...register(`menu.desserts[${index}].name`)} />
      <br />
      <label>Item Price: </label>
      <br />
      <input type="text" {...register(`menu.desserts[${index}].price`)} />
      <input
        type="hidden"
        {...register(`menu.desserts[${index}].type`)}
        value="desserts"
      />
      <input
        type="hidden"
        {...register(`menu.desserts[${index}].menuphoto`)}
        value="desserts"
      />
      <br />

      <br />
    </Container>
  );
};
const EditRestoMenuForm = (props) => {
  const docValue = props.document;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: docValue
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
    <div>
      <h3>EditRestoMenuForm</h3>
      <h3>Menu</h3>
      <h4>Appetizer</h4>
      {JSON.stringify(docValue.menu.appetizers)}
      {docValue &&
        docValue.menu.appetizers.map((data, index) => (
          <>
            <Appetizer register={register} key={index} index={index} />
          </>
        ))}


        {/* MAINS */}
        <div>Mains</div>
      {JSON.stringify(docValue.menu.mains)}

      {docValue &&
        docValue.menu.mains.map((data, index) => (
          <>
            <Main register={register} key={index} index={index} />
          </>
        ))}



      {/* DESSERTS */}
      <div>Desserts</div>
      {JSON.stringify(docValue.menu.desserts)}
      {docValue &&
        docValue.menu.desserts.map((data, index) => (
          <>
            <Dessert register={register} key={index} index={index} />
          </>
        ))}
      <button onClick={handleSubmit(onSubmit, onError)}>Update</button>
    </div>
  );
};

export default EditRestoMenuForm;
