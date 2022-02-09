import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Appetizer = ({ register, index }) => {
 
  const r = register(`name[${index}]`);
  console.log("r is",r)
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
  const docValue = props.document;

  const onSubmit = (data) => console.log("data is",data);
  const onError = (err) => console.log("error is",err);
  console.log(errors);
  return (
    <div>
      <h3>EditRestoMenuForm</h3>
      <h3>Menu</h3>
      <div>Appetizer</div>
      {JSON.stringify(docValue.menu.appetizers)}
      {docValue &&
        docValue.menu.appetizers.map((data, index) => (
          <Appetizer register={register} key={index} index={index} />
        ))}
      <button onClick={handleSubmit(onSubmit, onError)}>Update</button>
    </div>
  );
};

export default EditRestoMenuForm;
