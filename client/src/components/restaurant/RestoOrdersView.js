import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { Container } from "@mui/material";
import BackButton from "../navigation/BackButton";
import RestoOrdersViewAll from "./RestoOrdersViewAll";
import { usePendings } from "./RestoOrdersViewPendingContext";

const LiveOrders = () => {
  const myStyle = { fontFamily: "Bebas Neue" };
  const { db, user } = useUserAuth();
  const [orders, setOrders] = useState();
  const [pendingOrders, setPendingOrders] = useState([]);

  const { setNumPending } = usePendings();

  const { id } = useParams();

  console.log("restoId", id);
  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");
        const q = query(collRef, where("restaurantId", "==", id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            DOC_ID: doc.id,
          }));
          setOrders(newData);
        });
        return unsubscribe;
      } catch (e) {
        console.log("error", e.message);
      }
    };

    // pendingOrders = orders.forEach()
    getData();
    //filterPendings();
  }, [user.uid]);
  console.log("orders..", orders);

  useEffect(() => {
    const filterPendings = () => {
      const filtered = orders.filter((order) => {
        return order.orderStatus == "Pending";
      });
      console.log("filtered is", filtered);
      setPendingOrders(filtered);
      setNumPending(filtered.length);
    };
    if (orders) {
      filterPendings();
    }
  }, [orders]);

  //from the orders array - extract the ones that are pending...
  console.log("pending orders are", pendingOrders);
  const handleComplete = async (ID) => {
    try {
      let collRef = collection(db, "orders");
      console.log("collRef", collRef);
      let docRef = doc(collRef, ID);
      console.log("docRef", docRef);
      await setDoc(docRef, { orderStatus: "Complete" }, { merge: true });
    } catch (e) {
      console.log("error at handleComplete..", e.message);
    }
  };

  if (orders) {
    return (
      <>
        <Link to="/restaurant/dashboard">
          <BackButton />
        </Link>
        <Container
          style={{
            width: "auto",
            backgroundColor: "#f7f4ef",
            borderRadius: "15px",
            paddingBottom: "15px",
            overflowY: "auto",
            maxHeight: "800px",
            height: "80vh",
          }}
        >
          <h1 className="p-4 box mt-3 text-center" style={myStyle}>
            Orders 
          </h1>
          <Tabs
            defaultActiveKey="Live"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Live" title="Live Orders">
            <h3 className="p-4 box mt-3 text-center" style={myStyle}>
            In progress: {pendingOrders?.length} 
          </h3>
              {pendingOrders?.map((order) => (
                <Card
                  style={{
                    width: "50rem",
                    margin: "auto",
                    marginBottom: "10px",
                    border: "black solid",
                  }}
                >
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Order Number: {order.orderId}</Card.Title>
                        <span> Date: {order.orderDate}</span> <br />
                        <span> Time: {order.orderTime}</span> <br />
                      </Col>
                      <Col style={{ textAlign: "right" }}>
                        <strong>Status: {order.orderStatus}</strong>
                        <br />
                        <strong>
                          Delivery Type: {order.deliveryType}
                        </strong>{" "}
                        <br />
                      </Col>
                    </Row>
                    <Card.Text>
                      Items: <br />
                      <strong>
                        {order.orderItems.map((item) => (
                          <>
                            <span>{item.qty}</span>
                            <span> x </span>
                            <span>{item.name}</span>
                            <br></br>
                          </>
                        ))}
                      </strong>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        style={{ margin: "10px" }}
                        onClick={() => handleComplete(order.DOC_ID)}
                      >
                        Mark Complete
                      </Button>
                      <spna></spna>
                      {/* <Button style={{margin: "10px"}}> Mark Cancel </Button> */}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Tab>
            <Tab eventKey="All" title="All">
              <RestoOrdersViewAll orders={orders} />
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
