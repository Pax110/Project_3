import React from "react";
import { register } from "react-hook-form";
import { useForm, Controller, UseFormSetValue } from "react-hook-form";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import background from "../landingimage/food1.jpg";

const EditRestoProfileForm = ({props}) => {
  const document1 = props
  {console.log("doc in the form ", document1)}
  const { control, handleSubmit, setValue } = useForm({
    
    defaultValues: {
      name: props.name
    },
  }); //defines an empty form object  //on button click all handleSubmit> its react hook forms has everything and then call our submit function
  //<button onClick={()=>handleSubmit(your submit function goes here)}> then you use update doc with this data. then you do an update doc in firestore (gets handed data)

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
            {/* <h2 className="mb-3 text-center">
              Update Restaurant Profile ({id})
            </h2> */}
            <h2 className="mb-3 text-center">Update Restaurant Profile</h2>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              
              <Form.Group className="mb-3" controlId="formRestoName">
                <Form.Label>Business Name:</Form.Label>
                <Controller
                
                  name="name"
                  control={control} //hooks you up to form
                  render={({ field }) => {
                    console.log("FIELD IS ", field);
                    return <Form.Control {...field} />;
                  }} //places the form control and populates all the fields
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Business Type:</Form.Label>
                <Controller
                  name="Home"
                 
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Row>
                      <Col>
                        {" "}
                        <Form.Check
                          type="radio"
                          value="Home"
                          // checked={type === "Home"}
                          label="Home Kitchen"
                          // onChange={(e) => setType(e.target.value)}
                        />
                      </Col>

                      <Col>
                        {" "}
                        <Form.Check
                          type="radio"
                          value="Commissary"
                          // checked={type === "Commissary"}
                          label="Commissary Kitchen"
                          // onChange={(e) => setType(e.target.value)}
                        />{" "}
                      </Col>
                    </Row>
                  )}
                />
                ;
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address:</Form.Label>
                <Controller
                  name="address"
                  control={control} //hooks you up to form
                  render={({ field }) => {
                    console.log("FIELD IS ", field);
                    return <Form.Control {...field} />;
                  }}
                />
                ;
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2:</Form.Label>
                <Controller
                  name="address2"
                  control={control} //hooks you up to form
                  render={({ field }) => {
                    console.log("FIELD IS ", field);
                    return <Form.Control {...field} />;
                  }}
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City:</Form.Label>
                  <Controller
                    name="city"
                    control={control} //hooks you up to form
                    render={({ field }) => {
                      console.log("FIELD IS ", field);
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvince">
                  <Form.Label>Province/Territory:</Form.Label>
                  <Controller
                    control={control}
                    name="province"
                    render={({ field }) => (
                      <Form.Select
                        // defaultValue="Choose..."
                        type="province"
                        // value={province}
                        // onChange={(e) => setProvince(e.target.value)}
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
                    name="postalCode"
                    control={control} //hooks you up to form
                    render={({ field }) => {
                      console.log("FIELD IS ", field);
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
                      name="firstName"
                      control={control} //hooks you up to form
                      render={({ field }) => {
                        console.log("FIELD IS ", field);
                        return <Form.Control {...field} />;
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Label>
                      <br />
                    </Form.Label>
                    <Controller
                      name="lastName"
                      control={control} //hooks you up to form
                      render={({ field }) => {
                        console.log("FIELD IS ", field);
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
                    name="email"
                    control={control} //hooks you up to form
                    render={({ field }) => {
                      console.log("FIELD IS ", field);
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Business Phone Number:</Form.Label>
                  <Controller
                    name="phoneNumber"
                    control={control} //hooks you up to form
                    render={({ field }) => {
                      console.log("FIELD IS ", field);
                      return <Form.Control {...field} />;
                    }}
                  />
                </Form.Group>
              </Row>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    console.log("clicked");
                    // addRestroProfileInfo();
                    // navigate("/");
                  }}
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditRestoProfileForm;
