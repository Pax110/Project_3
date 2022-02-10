import { collection, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFirebase } from "../FirebaseProvider";

const DeleteRestoButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const docValue = props.doc;
  const { db } = useFirebase();
  const docId = props.id;

  const { handleSubmit } = useForm({
    defaultValues: docValue,
  });

  const myError = (err) => {
    console.log("err is", err);
  };

  const deleteRestroAccount = async () => {
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, docId);
    await deleteDoc(docRef);
    console.log("Deleted account:", docId);
    navigate("/");
  };
  return (
    <>
      <Form onSubmit={handleSubmit(deleteRestroAccount, myError)}>
        <div className="d-grid gap-2">
          <Button variant="danger" onClick={handleShow}>
            Delete Account
          </Button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We're sad to see you go - are you sure you want to delete your
            restaurant account? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              I've made a mistake!
            </Button>
            <Button
              variant="danger"
              onClick={handleSubmit(deleteRestroAccount, myError)}
            >
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default DeleteRestoButton;
