import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  ListGroup,
  Nav,
  NavDropdown,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Container } from "@mui/material";
import RestoOrdersViewAll from "./RestoOrdersViewAll";

const LiveOrders = () => {
  const { db, user } = useUserAuth();
 

  const [orders, setOrders] = useState();
  const { id } = useParams();
  console.log("restoId", id);
  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(collRef, where("restaurantId", "==", id));
        const querySnapshot = await getDocs(q);
        console.log("querySnapShop", querySnapshot);
        console.log("querySnapShot", querySnapshot);
        let newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setOrders(newData);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getData();
  }, [user.uid, orders]);
  console.log("orders..", orders);

  const orderStyle = {
    display: "flex",
  };

  const myStyle = { fontFamily: "Bebas Neue" };

  const handleSelect = () => {
    console.log("some link selected");
  };
  if (orders) {
    return (
      <>
        <Container
          style={{
            width: "auto",
            backgroundColor: "#f7f4ef",
            borderRadius: "15px",
            paddingBottom: "15px",
            overflowY: "auto",
            maxHeight: "800px",
          }}
        >
          <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Live" title="Live Orders">
              {/* {Live orders would go here...} */}
            </Tab>
            <Tab eventKey="All" title="All">
              <RestoOrdersViewAll orders={orders}/>
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <div>No orders yet..We'll celebrate your first order together!</div>
      </>
    );
  }
};

export default LiveOrders;
