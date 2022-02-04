import React from "react";

const EditRestoProfileForm = ({ document }) => {
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
            <h2 className="mb-3 text-center">
              Update Restaurant Profile ({id})
            </h2>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {console.log("doc is ", document)}
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
                <Row>
                  <Col>
                    {" "}
                    <Form.Check
                      type="radio"
                      value="Home"
                      checked={type === "Home"}
                      label="Home Kitchen"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Form.Check
                      type="radio"
                      value="Commissary"
                      checked={type === "Commissary"}
                      label="Commissary Kitchen"
                      onChange={(e) => setType(e.target.value)}
                    />{" "}
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  placeholder="1234 Main Street"
                  type="address"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2:</Form.Label>
                <Form.Control
                  placeholder="Apartment, Studio, Floor, or Prep Area (if applicable)"
                  type="address2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvince">
                  <Form.Label>Province/Territory:</Form.Label>
                  <Form.Select
                    // defaultValue="Choose..."
                    type="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
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
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPostalCode">
                  <Form.Label>Postal Code:</Form.Label>
                  <Form.Control
                    type="postal"
                    placeholder="Postal Code"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                  <Col>
                    <Form.Label>Business Contact:</Form.Label>
                    <Form.Control
                      type="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>
                      <br />
                    </Form.Label>
                    <Form.Control
                      type="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Business Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Business Phone Number:</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    type="phoneNumber"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    console.log("clicked");
                    addRestroProfileInfo();
                    navigate("/");
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
