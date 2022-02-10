import React, { useMemo } from "react";
import { register } from "react-hook-form";
import { useForm, Controller, UseFormSetValue } from "react-hook-form";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import background from "../landingimage/food1.jpg";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import DeleteRestoButton from "./DeleteRestoButton";

const EditRestoProfileForm = (props) => {
  const docValue = props.doc;
  const { user } = useUserAuth();
  const { db } = useFirebase();
  const docId = props.id;

  const { control, handleSubmit, setValue, formState } = useForm({
    //defaultValues: {name: name}
    defaultValues: docValue,
  }); //defines an empty form object  //on button click all handleSubmit> its react hook forms has everything and then call our submit function
  //<button onClick={()=>handleSubmit(your submit function goes here)}> then you use update doc with this data. then you do an update doc in firestore (gets handed data)
  const errors = formState.errors;
  const mySubmit = async (data) => {
    console.log("submitted data is", data);
    console.log("submitted data type is", data.type);
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, docId);

    await updateDoc(docRef, {
      name: data.name,
      description: data.description,
      type: data.type,
      contact: {
        address: data.contact.address,
        address2: data.contact.address2,
        city: data.contact.city,
        province: data.contact.province,
        postal: data.contact.postalCode,
        owner: {
          firstName: data.contact.owner.firstName,
          lastName: data.contact.owner.lastName,
        },
        email: data.contact.email,
      },
      phoneNumber: data.phoneNumber,
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
        }}
      >
        <Container
          style={{
            width: "600px",
            backgroundColor: "rgba(225, 229, 235, 0.9)",
          }}
        >
          <div className="p-4 box">
            <h2 className="mb-3 text-center">Update Restaurant Profile</h2>
            <Form onSubmit={handleSubmit(mySubmit, myError)}>
              <Form.Group className="mb-3" controlId="formRestoName">
                <Form.Label>Business Name:</Form.Label>
                <Controller
                  name="name"
                  control={control} //hooks you up to form
                  rules={{ required: true }}
                  render={(props) => {
                    const { field } = props;
                    return <Form.Control {...field} />;
                  }} //places the form control and populates all the fields
                />
                {errors.name && <div>this field has an error</div>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRestoDescription">
                <Form.Label>Add your resturant description:</Form.Label>
                <Controller
                  name="description"
                  control={control}
                  render={(props) => {
                    const { field } = props;
                    return <Form.Control {...field} />;
                  }}
                />
                {errors.name && <div>this field has an error</div>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Business Type:</Form.Label>
                <Controller
                  name="type"
                  control={control}
                  // rules={{ required: }}
                  render={({ field: { onChange, value, name } }) => (
                    <Row onChange={onChange} value={value}>
                      <Col>
                        {" "}
                        <Form.Check
                          type="radio"
                          name={name}
                          // checked={type === "Commissary"}
                          label="Commissary Kitchen"
                          onChange={onChange}
                          // {...field}
                          value="Commissary"
                        />{" "}
                      </Col>

                      <Col>
                        {" "}
                        <Form.Check
                          type="radio"
                          name={name}
                          // checked={type === "Commissary"}
                          label="Home Kitchen"
                          onChange={onChange}
                          // {...field}
                          value="Home"
                        />{" "}
                      </Col>
                    </Row>
                  )}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGrid">
                <Form.Label>Address:</Form.Label>
                <Controller
                  name="contact.address"
                  control={control}
                  render={({ field }) => {
                    return <Form.Control {...field} />;
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2:</Form.Label>
                <Controller
                  name="contact.address2"
                  control={control}
                  render={({ field }) => {
                    return <Form.Control {...field} />;
                  }}
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City:</Form.Label>
                  <Controller
                    name="contact.city"
                    control={control}
                    render={({ field }) => {
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Province/Territory:</Form.Label>
                  <Controller
                    control={control}
                    name="province"
                    render={({ field: { value, onChange } }) => (
                      <Form.Select
                        // defaultValue="Choose..."
                        type="province"
                        onChange={onChange}
                        value={value}
                        // value={province}
                      >
                        <option value="Choose...">Choose...</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">
                          British Columbia
                        </option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">
                          Newfoundland and Labrador
                        </option>
                        <option value="Northwest Territories">
                          Northwest Territories
                        </option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">
                          Prince Edward Island
                        </option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                      </Form.Select>
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPostalCode">
                  <Form.Label>Postal Code:</Form.Label>
                  <Controller
                    name="contact.postalCode"
                    control={control}
                    render={({ field }) => {
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                  <Col>
                    <Form.Label>Business Contact:</Form.Label>
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
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Business Email:</Form.Label>
                  <Controller
                    name="contact.email"
                    control={control}
                    render={({ field }) => {
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Business Phone Number:</Form.Label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => {
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>
              </Row>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
            <Form.Group>
              <br />
              <DeleteRestoButton id={props.id} />
            </Form.Group>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditRestoProfileForm;
