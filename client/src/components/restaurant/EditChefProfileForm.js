import React, { useMemo, useState } from "react";
import { register } from "react-hook-form";
import { useForm, Controller, UseFormSetValue } from "react-hook-form";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import background from "../landingimage/wood.jpg";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import DeleteRestoButton from "./DeleteRestoButton";
// import FileUploader from "../file-uploader/FileUploader";
import RestroUpdateUploader from "../file-uploader/RestroUpdateUploader";

const EditChefProfileForm = (props) => {
  const docValue = props.doc;
  const { user } = useUserAuth();
  const { db } = useFirebase();
  const docId = props.id;
  const myStyle = { fontFamily: "Bebas Neue" };
  const [photoURL, setPhotoURL] = useState();
  const { control, handleSubmit, setValue, formState } = useForm({
    defaultValues: docValue,
  });
  const errors = formState.errors;
  const mySubmit = async (data) => {
    console.log("submitted data is", data);
    console.log("submitted data type is", data.type);
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, docId);

    await updateDoc(docRef, {
      contact: {
        owner: {
          firstName: data.contact.owner.firstName,
          lastName: data.contact.owner.lastName,
          about: data.contact.owner.about,
        },
      },
    });
  };
  const myError = (err) => {
    console.log("err is", err);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "20px",
        }}
      >
        <Container
          style={{
            width: "600px",
            backgroundColor: "#f7f4ef",
            borderRadius: "15px",
            paddingBottom: "15px",
          }}
        >
          <div className="p-4 box">
            <h1 className="p-4 box mt-3 text-center" style={myStyle}>
              Edit Chef Profile
            </h1>
            <Form onSubmit={handleSubmit(mySubmit, myError)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                  <Col>
                    <Form.Label>Chef:</Form.Label>
                    <Controller
                      name="contact.owner.firstName"
                      control={control}
                      render={({ field }) => {
                        return <Form.Control {...field} />;
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Label>
                      <br />
                    </Form.Label>
                    <Controller
                      name="contact.owner.lastName"
                      control={control}
                      render={({ field }) => {
                        return <Form.Control {...field} />;
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label>Tell us your story:</Form.Label>
                <Controller
                  name="contact.owner.about"
                  className="input-group-text"
                  control={control}
                  render={(props) => {
                    const { field } = props;
                    return (
                      <Form.Control
                        {...field}
                        style={{
                          height: "500px",
                          width: "100%",
                          overflowWrap: "break-word",
                        }}
                      />
                    );
                  }}
                />
                {errors.name && <div>this field has an error</div>}
              </Form.Group>

              <Row className="mb-3">
                <Form.Group>
                  {" "}
                  <Form.Label>Upload Profile Photo</Form.Label>
                  <RestroUpdateUploader setPhotoURL={setPhotoURL} />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Update Chef Profile
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditChefProfileForm;
