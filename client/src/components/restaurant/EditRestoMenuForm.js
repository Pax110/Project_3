import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Container, Form, Card, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import background from "../landingimage/wood.jpg";
import Appetizer from "./EditRestoMenu_Appetizers";
import Main from "./EditRestoMenuForm_Mains";
import Dessert from "./EditRestoMenuForm_Desserts";
import { EditIcon } from "../icon/EditIcon";
import { AddImageIcon } from "../icon/AddImageIcon";
import BackButton from "../navigation/BackButton";
import { Add } from "../icon/Add";

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
        paddingTop: "20px",
        paddingBottom: "15px",
      }}
    >
      <Link to="/restaurant/dashboard">
        <BackButton />
      </Link>
      <Container
        style={{
          width: "60%",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          overflowY: "auto",
          maxHeight: "800px",
        }}
      >
        <div
          style={{
            display: "inline",
          }}
        >
          <h1 className="p-4 box mt-3 text-center" style={myStyle}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit
            Menu
            <Button
              onClick={handleSubmit(onSubmit, onError)}
              variant="success"
              style={{
                margin: "0",
                float: "right",
                top: "50%",
                left: "50%",
                fontFamily: "Arial",
              }}
            >
              <EditIcon style={{ width: "30px", height: "30px" }} />
              &nbsp;&nbsp;UPDATE MENU
            </Button>
          </h1>
        </div>
        <Tabs
          defaultActiveKey="Appetizers"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Appetizers" title="Appetizers">
            <Card.Body>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button>
                  {" "}
                  <Add style={{ width: "30px", height: "30px" }} />
                  &nbsp;&nbsp;Add Appetizer Item
                </Button>
              </div>
              <Card.Text>
                {docValue &&
                  docValue.menu.appetizers.map((data, index) => (
                    <>
                      <Appetizer
                        register={register}
                        key={index}
                        index={index}
                      />
                    </>
                  ))}
              </Card.Text>
            </Card.Body>
          </Tab>

          <Tab eventKey="Mains" title="Mains">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <Button>
                {" "}
                <Add style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;Add Main Item
              </Button>
            </div>
            <Card.Body>
              <Card.Text>
                {docValue &&
                  docValue.menu.mains.map((data, index) => (
                    <>
                      <Main register={register} key={index} index={index} />
                    </>
                  ))}
              </Card.Text>
            </Card.Body>
          </Tab>
          <Tab eventKey="Desserts" title="Desserts">
            <Card.Body>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button>
                  {" "}
                  <Add style={{ width: "30px", height: "30px" }} />
                  &nbsp;&nbsp;Add Dessert Item
                </Button>
              </div>
              <Card.Text>
                {docValue &&
                  docValue.menu.desserts.map((data, index) => (
                    <>
                      <Dessert register={register} key={index} index={index} />
                    </>
                  ))}
              </Card.Text>
            </Card.Body>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default EditRestoMenuForm;
