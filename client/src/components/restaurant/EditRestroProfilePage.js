import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import background from "../landingimage/food1.jpg";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";

//user.uid === restaurants.OwnerUid

const EditRestroProfilePage = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  console.log("user id is", user.uid);
  const navigate = useNavigate();

  const [resto, setResto] = useState("");
  const [type, setType] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //placeholder hooks
  const [tempResto, setTempResto] = useState("");
  const [tempType, setTempType] = useState("");
  const [tempAddress1, setTempAddress1] = useState("");
  const [tempAddress2, setTempAddress2] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempProvince, setTempProvince] = useState("");
  const [tempPostal, setTempPostal] = useState("");
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPhone, setTempPhone] = useState("");

  //setting final document to use for placeholer
  const [document, setDocument] = useState([]);

  //getting DOC_ID to update the data
  const [id, setId] = useState("");

  useEffect(async () => {
    try {
      console.log("useEffect triggered");
      let collectionRef = collection(db, "restaurants");

      // let alldocs = await getDocs(collectionRef)

      let queryRef = query(collectionRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(queryRef);

      console.log("querySnap", querySnap);
      if (querySnap.empty) {
        console.log("querySnap came back empty");
      } else {
        let newData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        console.log("new data", newData[0].name);
        setDocument(newData);
        console.log("setId is.........", newData[0].DOC_ID);
        setId(newData[0].DOC_ID);
      }
    } catch (ex) {
      console.log("Errorrrr", ex.message);
    }

    // let collectionRef = collection(db, "resturants");
    // let documentRef = doc(collectionRef, "abc");
    // const unsubscribe = onSnapshot(documentRef, (doc) => {
    //   if (doc.exists) {
    //     const receivedData = doc.data();
    // console.log("DOCUMENT DATA name", receivedData.firstName);
    // setTempFirstName(newData[0].firstName);
    // setTempLastName(newData[0].lastName);
    // setTempAddress1(newData[0].address1);
    // setTempAddress2(newData[0].address2);
    // setTempResto(newData[0].resto);
    // setTempType(newData[0].type);
    // setTempProvince(newData[0].province);
    // setTempCity(newData[0].city);
    // setTempPostal(newData[0].postal);
    // setTempEmail(newData[0].email);
    // setTempPhone(newData[0].phone);
    //   }
    // });
    // return unsubscribe;
  }, []);

  const addRestroProfileInfo = async () => {
    {
      console.log("id is ", id);
    }
    try {
      let collectionRef = collection(db, "restaurants");
      let documentRef = doc(collectionRef, id);
      await setDoc(
        documentRef,
        {
          name: resto,
          type: type,
          contact: {
            address: address1,
            address2: address2,
            city: city,
            province: province,
            postal: postal,
            owner: { firstName: firstName, lastName: lastName },
            email: email,
            phoneNumber: phone,
            // ownerUid: user.uid,
          },
        },
        { merge: true }
      );
      console.log("success!");
      setResto("");
      setType("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setProvince("");
      setPostal("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (ex) {
      console.log("FIRESTORE ADD FAILURE!", ex.message);
    }
  };

  // const editGeneralInfoFields = async () => {};

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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {console.log("doc is ", document)}
              <Form.Group className="mb-3" controlId="formRestoName">
                <Form.Label>Business Name:</Form.Label>
                <Form.Control
                  // placeholder={document[0].name}
                  type="name"
                  value={resto}
                  onChange={(e) => setResto(e.target.value)}
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
                    <Form.Label>Owner Contact:</Form.Label>
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
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Phone Number:</Form.Label>
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

export default EditRestroProfilePage;