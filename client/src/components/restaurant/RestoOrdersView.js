import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
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
  const [status, setStatus] = useState(null);
  const [orders, setOrders] = useState();
  const [pendingOrders, setPendingOrders] = useState();
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
    const filterPendings = () => {
      const filtered = orders?.filter((order) => {
        return order.orderStatus == "Pending";
      });
      setPendingOrders(filtered);
    };
    // pendingOrders = orders.forEach()
    getData();
    filterPendings();
  }, [user.uid]);
  console.log("orders..", orders);

  const orderStyle = {
    display: "flex",
  };

  const myStyle = { fontFamily: "Bebas Neue" };

  const handleSelect = () => {
    console.log("some link selected");
  };

  //from the orders array - extract the ones that are pending...
  console.log("pending orders are", pendingOrders);

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
              {pendingOrders?.map((order) => (
                <Card
                  style={{
                    width: "50rem",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Order Number: {order.orderId}</Card.Title>
                        <span> Date: </span> <br />
                        <span> Time: </span> <br />
                      </Col>
                      <Col style={{ textAlign: "right" }}>
                        <strong>Status: {order.orderStatus}</strong><br />
                        <strong>Delivery Type:</strong> <br />
                      </Col>
                    </Row>
                    <Card.Text>
                      Items: <br />
                      <hr></hr>
                      <p>Order Total: </p>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button style={{ margin: "10px" }}>
                        {" "}
                        Mark Complete{" "}
                      </Button>
                      <spna></spna>
                      {/* <Button style={{margin: "10px"}}> Mark Cancel </Button> */}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Tab>
            <Tab eventKey="All" title="All">
              <RestoOrdersViewAll
                status={status}
                setStatus={setStatus}
                orders={orders}
              />
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
