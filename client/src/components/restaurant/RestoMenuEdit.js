import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { Form, Container, Button } from "react-bootstrap";
import AddAppItem from "./AddAppItem";
import AddMainItem from "./AddMainItem";
import AddDessertItem from "./AddDessertItem";

const RestoMenuEdit = () => {
  const { id } = useParams();
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [tempName, setTempName] = useState("");
  const [tempPrice, setTempPrice] = useState("");

  useEffect(() => {
    const getMenuData = async () => {
      try {
        let docRef = doc(db, "restaurants", id);
        let docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          console.log("No docs found");
        } else {
          let restoData = docSnap.data();
          restoData.DOC_ID = docSnap.id;
          setRestaurant(restoData);
          console.log(restoData);
        }
      } catch (ex) {
        console.log("Firestore failure!", ex.message);
      }
    };
    if (id) {
      getMenuData();
    }
  }, [id]);

  const EditItemDisplay = (props) => {
    const item = props.item;
    return (
      <Container
        style={{
          width: "400px",
          backgroundColor: "#feaa00",
        }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formMenuItem">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder={item.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="text"
              placeholder={item.price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </Form.Group>
        </Form>
      </Container>
    );
  };
  return (
    <div>
      <h3> Menu: </h3>
      <h3> Appetizers:</h3>
      {restaurant &&
        restaurant.menu.appetizers.map((i) => (
          <EditItemDisplay key={i.name} item={i}  />
        ))}
      <AddAppItem />
      <h3> Mains:</h3>
      {restaurant &&
        restaurant.menu.mains.map((i) => (
          <EditItemDisplay key={i.name} item={i} />
        ))}
      <AddMainItem />
      <h3> Desserts:</h3>
      {restaurant &&
        restaurant.menu.desserts.map((i) => (
          <EditItemDisplay key={i.name} item={i} />
        ))}
      <AddDessertItem />
      <h3>docId: {restaurant?.DOC_ID}</h3>

      <hr />
    </div>
  );
};

export default RestoMenuEdit;
